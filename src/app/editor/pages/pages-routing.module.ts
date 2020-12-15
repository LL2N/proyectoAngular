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
      {path: 'sobrelpb', loadChildren: () => import('./sobre-lpbhistoria/sobre-lpbhistoria.module').then(m => m.SobreLPBHistoriaModule)},
      {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}