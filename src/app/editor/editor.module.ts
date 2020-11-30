import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    children: [
      { path: "", redirectTo: "pages", pathMatch: "full" },
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