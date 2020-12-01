import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasComponent } from './rutas.component';
import { Routes, RouterModule } from "@angular/router";
import { HorariosComponent } from './horarios/horarios.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { ListaComponent } from './lista/lista.component';
import { RutaComponent } from './ruta/ruta.component';

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
      },
      {
        path: "ruta",
        loadChildren: () =>
          import("./ruta/ruta.module").then(m => m.RutaModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RutasComponent, HorariosComponent, TarifasComponent, ListaComponent, RutaComponent]
})
export class RutasModule { }