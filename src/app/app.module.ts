import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppbootstrapModule } from './appbootstrap/appbootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductGallaryComponent } from './products/product-gallary/product-gallary.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { DarkSideHeaderComponent } from './dark-side-header/dark-side-header.component';
import { FooterComponent } from './footer/footer.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingService } from './services/shopping.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductWomenComponent } from './products/product-women/product-women.component';
import { ProductBrandsComponent } from './products/product-brands/product-brands.component';
import { ProductAccessoriesComponent } from './products/product-accessories/product-accessories.component';
import { ProductOfferZoneComponent } from './products/product-offer-zone/product-offer-zone.component';
import { HomeComponent } from './home/home.component';
import { ProductBabyKidsComponent } from './products/product-baby-kids/product-baby-kids.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyComponent } from './policy/policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ProductOfferDetailsComponent } from './products/product-offer-zone/product-offer-details/product-offer-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Men', component: ProductListComponent},
  { path: 'Women', component: ProductWomenComponent},
  { path: 'Baby', component: ProductBabyKidsComponent},
  { path: 'Brands', component: ProductBrandsComponent},
  { path: 'Accessories', component: ProductAccessoriesComponent},
  { path: 'offer', component: ProductOfferZoneComponent},
  { path: 'Product-details', component: ProductGallaryComponent},
  { path: 'About-us', component: AboutUsComponent},
  { path: 'Contact-us', component: ContactComponent},
  { path: 'Policy', component: PolicyComponent},
  { path: 'Disclaimer', component: DisclaimerComponent},
  { path: 'MenBrands', component: ProductListComponent},
  { path: 'WomenBrands', component: ProductWomenComponent},
  { path: 'Accessory', component: ProductAccessoriesComponent},
  { path: 'Product-offer-details', component: ProductOfferDetailsComponent},


  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductGallaryComponent,
    ProductDetailsComponent,
    DarkSideHeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductWomenComponent,
    ProductBrandsComponent,
    ProductAccessoriesComponent,
    ProductOfferZoneComponent,
    HomeComponent,
    ProductBabyKidsComponent,
    AboutUsComponent,
    ContactComponent,
    PolicyComponent,
    DisclaimerComponent,
    ProductOfferDetailsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    BrowserModule,
    HttpClientModule,
    AppbootstrapModule,
    NgbModule,
    FormsModule,
    PopoverModule.forRoot(),
    RouterModule.forRoot(appRoutes), 
    ReactiveFormsModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
