import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifasComponent } from './tarifas/tarifas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ListaComponent } from './lista/lista.component';
import { RutasComponent } from './rutas.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: RutasComponent,
    children: [
      { path: "", redirectTo: "lista", pathMatch: "full" },
      {
        path: "lista",
        loadChildren: () => import("./lista/lista.module").then(m => m.ListaModule)
      },
      {
        path: "horarios",
        loadChildren: () => import("./horarios/horarios.module").then(m => m.HorariosModule)
      },
      {
        path: "tarifas",
        loadChildren: () =>
          import("./tarifas/tarifas.module").then(m => m.TarifasModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RutasComponent]
})
export class RutasModule { }