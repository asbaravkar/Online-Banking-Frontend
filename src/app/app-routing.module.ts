import { CustLoginComponent } from './components/cust-login/cust-login.component';
import { CustRegisterAccountComponent } from './components/cust-register-account/cust-register-account.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { CustDetailsComponent } from './components/cust-details/cust-details.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustRegisterIbComponent } from './components/cust-register-ib/cust-register-ib.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'admin-login', component:AdminLoginComponent
  },
  {
    path:'admin-dashboard', component:AdminDashboardComponent,
    children:[
      {path:'details/:id', component:CustDetailsComponent},
      {path:'', component:AccountListComponent}
    ]
  },
  {
    path:'register-account', component:CustRegisterAccountComponent
  },
  {
    path:'register-ib', component:CustRegisterIbComponent
  },
  {
    path:'login', component:CustLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AdminLoginComponent, AdminDashboardComponent, CustDetailsComponent, 
  CustRegisterAccountComponent, CustRegisterIbComponent, CustLoginComponent]