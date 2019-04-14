import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogComponent} from './pages/catalog/catalog.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import {CartComponent} from './pages/cart/cart.component';
import {CheckOrderAuthComponent} from './pages/check-order-auth/check-order-auth.component';
import {CheckOrderStatusComponent} from './pages/check-order-status/check-order-status.component';

const routes: Routes = [
  {path: 'catalog/:id', component: CatalogComponent},
  {path: 'product/:id', component: ProductCardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'check-order-auth', component: CheckOrderAuthComponent},
  {path: 'check-order-status', component: CheckOrderStatusComponent},
  {path: '', redirectTo: '/catalog/0', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
