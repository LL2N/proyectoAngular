import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormRutaComponent } from './form-ruta.component';
import { RutasService } from '../../../shared/services/rutas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {path: '', component: FormRutaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule],
  declarations: [FormRutaComponent],
  providers: [
    RutasService
  ]
})
export class FormRutaModule { }