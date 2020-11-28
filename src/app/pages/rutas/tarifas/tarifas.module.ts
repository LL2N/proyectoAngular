import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { TarifasComponent } from './tarifas.component';

const routes: Routes = [
  {path: '', component: TarifasComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TarifasModule { }