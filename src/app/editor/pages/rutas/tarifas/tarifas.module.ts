import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { TarifasComponent } from './tarifas.component';
import { TarifasService } from '../../../../shared/services/tarifas.service';

const routes: Routes = [
  {path: '', component: TarifasComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TarifasComponent],
  providers: [TarifasService]
})
export class TarifasModule { }