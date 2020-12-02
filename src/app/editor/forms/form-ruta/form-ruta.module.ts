import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormRutaComponent } from './form-ruta.component';

const routes: Routes = [
  {path: '', component: FormRutaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [FormRutaComponent]
})
export class FormRutaModule { }