import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeawaterFishesComponent } from './seawater-fishes/seawater-fishes.component';
import { FishwaterfishesComponent } from './fishwaterfishes/fishwaterfishes.component';
import { CrabExportsComponent } from './crab-exports/crab-exports.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { OtherSeaFoodExportsComponent } from './other-sea-food-exports/other-sea-food-exports.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { FishComponent } from './fish/fish.component';
import { CauroselComponent } from './caurosel/caurosel.component';
import { AboutGocComponent } from './about-goc/about-goc.component';
import { ContactComponent } from './contact/contact.component';
import { ShweGingaComponent } from './shwe-ginga/shwe-ginga.component';
import { BlogModelComponent } from './shwe-ginga/blog-model/blog-model.component';
import { PrawnsExportComponent } from './prawns-export/prawns-export.component';
import { NgwWowModule } from 'ngx-wow';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeawaterFishesComponent,
    FishwaterfishesComponent,
    CrabExportsComponent,
    PrawnsComponent,
    OtherSeaFoodExportsComponent,
    FooterComponent,
    SliderComponent,
    ProductComponent,
    FishComponent,
    CauroselComponent,
    AboutGocComponent,
    ContactComponent,
    ShweGingaComponent,
    BlogModelComponent,
    PrawnsExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
