import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrabExportsComponent } from './crab-exports/crab-exports.component';
import { FishwaterfishesComponent } from './fishwaterfishes/fishwaterfishes.component';
import { HomeComponent } from './home/home.component';
import { OtherSeaFoodExportsComponent } from './other-sea-food-exports/other-sea-food-exports.component';
import { PrawnsComponent } from './prawns/prawns.component';
import { SeawaterFishesComponent } from './seawater-fishes/seawater-fishes.component';
import { AboutGocComponent } from './about-goc/about-goc.component';
import { ContactComponent } from './contact/contact.component';
import { ShweGingaComponent } from './shwe-ginga/shwe-ginga.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'SeawaterFishes',component:SeawaterFishesComponent},
  {path:'fishwaterfishes',component:FishwaterfishesComponent},
  {path:'crabexports',component:CrabExportsComponent},
  {path:'prawns',component:PrawnsComponent},
  {path:'OtherSeafood',component:OtherSeaFoodExportsComponent},
  {path:'about',component:AboutGocComponent},
  {path:'contact',component:ContactComponent},
  {path:'shwe-ginga',component:ShweGingaComponent},
  {path: '',pathMatch : 'full',redirectTo : '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
