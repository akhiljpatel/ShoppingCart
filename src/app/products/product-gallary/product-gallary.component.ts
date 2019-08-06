import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products';
@Component({
  selector: 'app-product-gallary',
  templateUrl: './product-gallary.component.html',
  styleUrls: ['./product-gallary.component.css']
})
export class ProductGallaryComponent implements OnInit {

  imageSrc = '';
  messageText = '';
  public prod: Products;
  imageButtons:Array<object>=[];
  // imageButtons = [{ src: '../../assets/Images/product_1.png', src1: '../../assets/Images/product_1_thumb.png' },
  // { src: '../../assets/Images/product_2.png', src1: '../../assets/Images/product_2_thumb.png' },
  // { src: '../../assets/Images/product_3.png', src1: '../../assets/Images/product_3_thumb.png' }]

  // imageButtons = [{ src: this.prod.image, src1: this.prod.t_image_1 },
  // { src: this.prod.image, src2: this.prod.t_image_2 },
  // { src: this.prod.image, src3: this.prod.t_image_3 }]


  constructor() { }

  ngOnInit() {
    // this.imageSrc = '../../assets/Images/product_1.png';
    this.prod=JSON.parse(sessionStorage.getItem('pro'));
    this.imageButtons = [{ src: this.prod.image, src1: this.prod.t_image_1 },
      { src: this.prod.image_2, src1: this.prod.t_image_2 },
      { src: this.prod.image_3, src1: this.prod.t_image_3 }];
    this.imageSrc = this.prod.image;
  }
  onClick(n) {
    this.imageSrc = n.src;
  }
}
