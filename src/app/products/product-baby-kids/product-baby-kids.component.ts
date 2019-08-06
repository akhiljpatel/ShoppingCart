import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-baby-kids',
  templateUrl: './product-baby-kids.component.html',
  styleUrls: ['./product-baby-kids.component.css']
})
export class ProductBabyKidsComponent implements OnInit {

  public product: any=[];


  constructor(private shoppingService: ShoppingService, private router: Router) { }

  ngOnInit() {
    this.shoppingService.getProductBaby().subscribe( response => {
      this.product=response;
    });
  }

  onSelect(pro){
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('/Product-details');
  }
}