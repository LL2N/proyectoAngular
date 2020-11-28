import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { RutasComponent } from './rutas/rutas.component';


@NgModule({
  declarations: [
    PagesComponent,
    RutasComponent
  ],
  imports: [
    CommonModule, RouterModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesModule {
}