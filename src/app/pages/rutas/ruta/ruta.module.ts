import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutaComponent } from './ruta.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    component: RutaComponent,
    
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [RutaComponent]
})
export class RutaModule { }