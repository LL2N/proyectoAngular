import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormTarifaComponent } from './form-tarifa.component';

const routes: Routes = [
  {path: '', component: FormTarifaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [FormTarifaComponent]
})
export class FormTarifaModule { }