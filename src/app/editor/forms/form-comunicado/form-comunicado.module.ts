import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComunicadoComponent } from './form-comunicado.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComunicadosService } from '../../../shared/services/comunicados.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  {path: '', component: FormComunicadoComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule],
  declarations: [FormComunicadoComponent],
  providers: [
    ComunicadosService
  ]
})
export class FormComunicadoModule { }