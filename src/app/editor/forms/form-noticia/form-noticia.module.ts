import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormNoticiaComponent } from './form-noticia.component';
import { NoticiasService } from '../../../shared/services/noticias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {path: '', component: FormNoticiaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule],
  declarations: [FormNoticiaComponent],
  providers: [
    NoticiasService
  ]
})
export class FromNoticiaModule { }