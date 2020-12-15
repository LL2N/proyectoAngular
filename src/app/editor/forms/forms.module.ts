import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { RouterModule, Routes } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {path: '', redirectTo: 'formhistoria', pathMatch: 'full'},
      {path: 'formhistoria', loadChildren: () => import('./form-historia/form-historia.module').then(m => m.FormHistoriaModule)},
      {path: 'formruta', loadChildren: () => import('./form-ruta/form-ruta.module').then(m => m.FormRutaModule)},
      {path: 'formtarifa', loadChildren: () => import('./form-tarifa/form-tarifa.module').then(m => m.FormTarifaModule)},
      {path: 'formhorario', loadChildren: () => import('./form-horario/form-horario.module').then(m => m.FormHorarioModule)},
      {path: 'formnoticia', loadChildren: () => import('./form-noticia/form-noticia.module').then(m => m.FromNoticiaModule)},
      {path: 'formcomunicado', loadChildren: () => import('./form-comunicado/form-comunicado.module').then(m => m.FormComunicadoModule)},
      {path: 'formusuario', loadChildren: () => import('./form-usuario/form-usuario.module').then(m => m.FormUsuarioModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [FormsComponent]
})
export class FormsModule { }