import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ElectronicsComponent } from './items/electronics/electronics.component';
import { FashionComponent } from './items/fashion/fashion.component';
import { JewelleryComponent } from './items/jewellery/jewellery.component';


const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'header', component: HeaderComponent},
 {path: 'product', component: ProductsComponent},
 {path: 'cart', component: CartComponent},
 {path: 'footer', component: FooterComponent},
 {path: 'signup', component: SignupComponent},
 {path: 'signin', component: SigninComponent},
 {path: 'fashion', component: FashionComponent},
 {path: 'jewellery', component: JewelleryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
