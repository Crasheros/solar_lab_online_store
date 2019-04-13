import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerBigComponent } from './pages/catalog/banner-big/banner-big.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FilterComponent } from './pages/catalog/filter/filter.component';
import { PaginationComponent } from './pages/catalog/pagination/pagination.component';
import { ProductsWrapperComponent } from './pages/catalog/products-wrapper/products-wrapper.component';
import { ProductsBannerComponent } from './pages/catalog/products-banner/products-banner.component';
import { ProductComponent } from './pages/catalog/product/product.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { CarouselComponent } from './pages/product-card/carousel/carousel.component';
import { BreadcrumbsComponent } from './pages/product-card/breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartWrapperComponent } from './pages/cart/cart-wrapper/cart-wrapper.component';
import { OrderRegistrationComponent } from './pages/cart/order-registration/order-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    BannerBigComponent,
    CatalogComponent,
    FilterComponent,
    PaginationComponent,
    ProductsWrapperComponent,
    ProductsBannerComponent,
    ProductComponent,
    ProductCardComponent,
    CarouselComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    CartComponent,
    CartWrapperComponent,
    OrderRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
