import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';





//import { Swal }  from 'sweetalert2/dist/sweetalert2.js';
import swal from 'sweetalert2'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './authInterceptorService';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
//import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
//import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import { AdminUsermanipulationsComponent } from './admin-usermanipulations/admin-usermanipulations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpProductinfoComponent } from './pop-up-productinfo/pop-up-productinfo.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminUsermanipulationsComponent } from './admin/admin-usermanipulations/admin-usermanipulations.component';
//import { AdminServiceComponent } from './admin-service/admin-service.component';
import { UserServiceComponent } from './user/user-service/user-service.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { AdminServiceComponent } from './admin/admin-service/admin-service.component';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { AdminInventoryComponent } from './admin/admin-inventory/admin-inventory.component';
import { PopForAddInvComponent } from './admin/pop-for-add-inv/pop-for-add-inv.component';
import { UserPlaceOrderComponent } from './user/user-place-order/user-place-order.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { PopToDeclineOrderComponent } from './admin/pop-to-decline-order/pop-to-decline-order.component';
import { PopToEditInventoryComponent } from './admin/pop-to-edit-inventory/pop-to-edit-inventory.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomepageComponent,
    LoginsuccessComponent,
    RegistrationsuccessComponent,
    ForbiddenComponent,
    AdminUsermanipulationsComponent,
    PopUpProductinfoComponent,
    ProductsComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminServiceComponent,
    UserServiceComponent,
    UserHomepageComponent,
    AllOrdersComponent,
    UserHeaderComponent,
    AdminInventoryComponent,
    PopForAddInvComponent,
    UserPlaceOrderComponent,
    UserOrdersComponent,
    PopToDeclineOrderComponent,
    PopToEditInventoryComponent,
    AdminProfileComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    NgbModule
  ],
 
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
