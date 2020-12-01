import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';

import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  
      {
        path: "pages", loadChildren: () => import("./pages/pages.module").then(
        m => m.PagesModule
      ) 
  }
    ]
  }
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [EditorComponent]
})
export class EditorModule { }