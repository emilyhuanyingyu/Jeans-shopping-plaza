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
import { ReviewComponent } from './review/review.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'signin', component:LoginComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'checkout', component:CheckoutComponent, canActivate:[AuthGuard]},
  {path: 'item/:id',component: ItemComponent},
  {path: 'item/:id/review',component: ReviewComponent},
  {path: 'resetpw',component: ResetpwComponent},
  {path: 'forgetpw',component: ForgetpwComponent},
  {path: 'not-found',component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
