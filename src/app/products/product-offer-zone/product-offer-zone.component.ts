import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-offer-zone',
  templateUrl: './product-offer-zone.component.html',
  styleUrls: ['./product-offer-zone.component.css']
})
export class ProductOfferZoneComponent implements OnInit {
  public product: any=[];


  constructor(private shoppingService: ShoppingService, private router: Router) { }

  ngOnInit() {
    this.shoppingService.getProductOffer().subscribe( response => {
      this.product=response;
    });
  }

  onSelect(pro){
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('/Product-offer-details');
  }
}