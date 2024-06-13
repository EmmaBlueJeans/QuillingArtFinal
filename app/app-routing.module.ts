import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EprComponent } from './epr/epr.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReturnComponent } from './return/return.component';
import { SecurityComponent } from './security/security.component';
import { TermComponent } from './term/term.component';
import { CardServicesComponent } from './card-services/card-services.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"category", children: [
    {path:":cat", component: ProductListComponent},
    {path:"", component: ProductListComponent}
  ]},
  {path:"detail/:id", component: ProductDetailComponent},
  {path:"cart", component: CardServicesComponent},

  {path: 'return', component: ReturnComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'term', component: TermComponent},
  {path: 'epr', component: EprComponent},
  {path: "checkout", component: CheckoutComponent},
  {path:"", redirectTo: "category/Animal", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
