import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule} from '@angular/common/http';
import { BoxesComponent } from './components/boxes/boxes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ElectronicsComponent } from './items/electronics/electronics.component';
import { JewelleryComponent } from './items/jewellery/jewellery.component';
import { FashionComponent } from './items/fashion/fashion.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    BoxesComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ElectronicsComponent,
    JewelleryComponent,
    FashionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule


],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
