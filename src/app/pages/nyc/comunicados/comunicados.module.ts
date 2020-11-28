import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { ComunicadosComponent } from './comunicados.component';

const routes: Routes = [
  {path: '', component: ComunicadosComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ComunicadosModule { }