import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { ComunicadosComponent } from './comunicados.component';
import { ComunicadosService } from '../../../shared/services/comunicados.service';

const routes: Routes = [
  {path: '', component: ComunicadosComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ComunicadosComponent],
  providers: [ComunicadosService] 
})
export class ComunicadosModule { }