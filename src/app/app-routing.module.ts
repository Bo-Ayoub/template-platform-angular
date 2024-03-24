import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { IndexComponent } from './home/index/index.component';
import { Index2Component } from './api/index/index.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"payment/:id",component:AddPaymentComponent},
  {path:"todos",component:Index2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
