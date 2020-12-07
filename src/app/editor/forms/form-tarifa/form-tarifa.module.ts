import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormTarifaComponent } from './form-tarifa.component';
import { TarifasService } from '../../../shared/services/tarifas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {path: '', component: FormTarifaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule],
  declarations: [FormTarifaComponent],
  providers: [
    TarifasService
  ]
})
export class FormTarifaModule { }