import { RouterModule, Routes } from '@angular/router';
import {
AboutComponent, ProductComponent, PortafolioComponent, BuscarComponent
} from './components/index.paginas';
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'buscar/:id', component: BuscarComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
