import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'nyc', pathMatch: 'full'},
      {path: 'nyc', loadChildren: () => import('./nyc/nyc.module').then(m => m.NycModule)},
      {path: 'rutas', loadChildren: () => import('./rutas/rutas.module').then(m => m.RutasModule)},
      {path: 'sobrelpb', loadChildren: () => import('./sobre-lpb/sobre-lpb.module').then(m => m.SobreLPBModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}