import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'cart', component:CartComponent},
  {path: 'login', component:LoginComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'item/:id',component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
