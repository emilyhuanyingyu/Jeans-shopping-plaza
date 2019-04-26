import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompareValidatorDirective } from './compare-validator.directive';
import { AuthGuard } from './auth.guard';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';
import { MainService } from "./main.service";
import { ItemlookupService } from "./itemlookup.service";
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    NavbarComponent,
    FilterPipe,
    HomeComponent,
    ItemComponent,
    CompareValidatorDirective,
    ResetpwComponent,
    ForgetpwComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MainService, AuthGuard, ItemlookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
