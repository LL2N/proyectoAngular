import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ListaComponent } from './lista.component';

const routes: Routes = [
  {
    path: "",
    component: ListaComponent,
    children: [
      {
        path: "ruta",
        loadChildren: () => import("./ruta/ruta.module").then(m => m.RutaModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ListaComponent]
})
export class ListaModule { }