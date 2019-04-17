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
import { MainService } from "./main.service";
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CompareValidatorDirective } from './compare-validator.directive';
import { AuthGuard } from './auth.guard';

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
    CompareValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MainService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
