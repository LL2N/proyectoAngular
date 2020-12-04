import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ListaComponent } from './lista.component';
import { RutasService } from '../../../shared/services/rutas.service';

const routes: Routes = [
  {
    path: "",
    component: ListaComponent,
    
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ListaComponent],
  providers: [RutasService]
})
export class ListaModule { }