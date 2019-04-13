import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
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
    BreadcrumbsComponent
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
