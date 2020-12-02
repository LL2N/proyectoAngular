import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormHorarioComponent } from './form-horario.component';

const routes: Routes = [
  {path: '', component: FormHorarioComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [FormHorarioComponent]
})
export class FormHorarioModule { }