import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'signin', component:LoginComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'checkout', component:CheckoutComponent, canActivate:[AuthGuard]},
  {path: 'item/:id',component: ItemComponent},
  {path: 'resetpw',component: ResetpwComponent},
  {path: 'forgetpw',component: ForgetpwComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
