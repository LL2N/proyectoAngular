import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";
import { SobreLPBComponent } from './sobre-lpb.component';

const routes: Routes = [
  {
    path: "",
    component: SobreLPBComponent,
    children: [
      { path: "", redirectTo: "quienessomos", pathMatch: "full" },
      {
        path: "quienessomos",
        loadChildren: () => import("./quienessomos/quienessomos.module").then(m => m.QuienessomosModule)
      },
      {
        path: "dyo",
        loadChildren: () => import("./dyo/dyo.module").then(m => m.DyoModule)
      },
      {
        path: "historia",
        loadChildren: () =>
          import("./historia/historia.module").then(m => m.HistoriaModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule, 
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [SobreLPBComponent]
})
export class SobreLPBModule { }