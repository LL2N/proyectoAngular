import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { DyoComponent } from './dyo.component';

const routes: Routes = [
  {path: '', component: DyoComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [DyoComponent]
})
export class DyoModule { }