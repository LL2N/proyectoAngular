import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { SobreLPBhistoriaComponent } from './sobre-lpbhistoria.component';


const routes: Routes = [
  {path: '', component: SobreLPBhistoriaComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [SobreLPBhistoriaComponent]
})
export class SobreLPBHistoriaModule { }