import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { MapComponent } from './components/map/map.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent} from './components/help/help.component';

const routes: Routes = [
  
  { path: 'products', component: HeroComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'map', component: MapComponent },
  { path: '' , component:  HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }