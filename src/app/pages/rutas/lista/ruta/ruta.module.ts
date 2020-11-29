import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { RutaComponent } from './ruta.component';

const routes: Routes = [
  {path: '', component: RutaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [RutaComponent]
})
export class ListaModule { }