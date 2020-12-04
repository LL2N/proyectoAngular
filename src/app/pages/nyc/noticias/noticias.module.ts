import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import {Routes, RouterModule} from '@angular/router';
import { NoticiasService } from '../../../shared/services/noticias.service';

const routes: Routes = [
  {path: '', component: NoticiasComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [NoticiasComponent],
  providers: [NoticiasService] 
})
export class NoticiasModule { }