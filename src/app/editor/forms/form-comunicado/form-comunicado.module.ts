import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComunicadoComponent } from './form-comunicado.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: FormComunicadoComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [FormComunicadoComponent]
})
export class FormComunicadoModule { }