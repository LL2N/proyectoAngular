import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';

import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from '../shared/guards/auth.guard';
import { AuthService } from '../shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';


const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        canActivate: [AuthGuard]
  }
    ]
  }
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  declarations: [EditorComponent],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class EditorModule { }