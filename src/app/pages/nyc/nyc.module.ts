import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { NYCComponent } from './nyc.component';

const routes: Routes = [
  {
    path: "",
    component: NYCComponent,
    children: [
      { path: "", redirectTo: "noticias", pathMatch: "full" },
      {
        path: "noticias",
        loadChildren: () => import("./noticias/noticias.module").then(m => m.NoticiasModule)
      },
      {
        path: "comunicados",
        loadChildren: () => import("./comunicados/comunicados.module").then(m => m.ComunicadosModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
    
  ],
  declarations: [NYCComponent]
})
export class NycModule { }