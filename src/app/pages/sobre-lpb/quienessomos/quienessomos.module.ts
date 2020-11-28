import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {QuienessomosComponent } from './quienessomos.component';

const routes: Routes = [
  {path: '', component: QuienessomosComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class QuienessomosModule { }