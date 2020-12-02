import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComunicadoComponent } from './form-comunicado.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FormComunicadoComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [FormComunicadoComponent]
})
export class FormComunicadoModule { }