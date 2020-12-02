import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormHistoriaComponent } from './form-historia.component';

const routes: Routes = [
  {path: '', component: FormHistoriaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [FormHistoriaComponent]
})
export class FormHistoriaModule { }