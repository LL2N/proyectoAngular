import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { HistoriaComponent } from './historia.component';
import { HistoriasService } from '../../../shared/services/historias.service';

const routes: Routes = [
  {path: '', component: HistoriaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [HistoriaComponent],
  providers: [HistoriasService]
})
export class HistoriaModule { }