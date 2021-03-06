import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HorariosComponent } from './horarios.component';
import { HorariosService } from '../../../../shared/services/horarios.service';

const routes: Routes = [
  {path: '', component: HorariosComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [HorariosComponent],
  providers: [HorariosService]
})
export class HorariosModule { }