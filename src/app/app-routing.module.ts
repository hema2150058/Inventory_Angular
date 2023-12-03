import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
//import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import { AdminUsermanipulationsComponent } from './admin-usermanipulations/admin-usermanipulations.component';
import { ProductsComponent } from './products/products.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminUsermanipulationsComponent } from './admin/admin-usermanipulations/admin-usermanipulations.component';
import { AdminServiceComponent } from './admin/admin-service/admin-service.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';
import { UserServiceComponent } from './user/user-service/user-service.component';
import { AdminInventoryComponent } from './admin/admin-inventory/admin-inventory.component';
import { UserPlaceOrderComponent } from './user/user-place-order/user-place-order.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { PopToDeclineOrderComponent } from './admin/pop-to-decline-order/pop-to-decline-order.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
//import { AdminServiceComponent } from './admin-service/admin-service.component';
//import { AdminHeaderComponent } from './admin-header/admin-header.component';
//import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

const routes: Routes = [
{  path: '', component: LoginsuccessComponent },   
{  path: "login", component: LoginComponent }, 
{  path: "register", component: RegisterComponent },
{  path: "registrationsuccess", component: RegistrationsuccessComponent },
{  path: "admin-homepage", component: AdminHomepageComponent},
{  path: "user-homepage", component: UserHomepageComponent},
{  path: "loginsuccess", component: LoginsuccessComponent},
{  path: "forbidden", component: ForbiddenComponent},
{  path: "admin-usermanipulations", component: AdminUsermanipulationsComponent},
{  path: "products", component: ProductsComponent},
{  path: "admin-header", component: AdminHeaderComponent},
{  path: "admin-sidenav", component: AdminSidenavComponent},
{  path: "admin-service", component: AdminServiceComponent},
{  path: "allOrders", component: AllOrdersComponent},
{  path: "user-service", component: UserServiceComponent},
{  path: "admin-inventory", component: AdminInventoryComponent},
{  path: "user-placeOrder", component: UserPlaceOrderComponent},
{  path: "user-orders", component: UserOrdersComponent},
{  path: "adminDecline-order", component: PopToDeclineOrderComponent},
{  path: "admin-profile", component: AdminProfileComponent},
{  path: "about", component: AboutUsComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
