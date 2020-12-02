import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormNoticiaComponent } from './form-noticia.component';

const routes: Routes = [
  {path: '', component: FormNoticiaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [FormNoticiaComponent]
})
export class FromNoticiaModule { }