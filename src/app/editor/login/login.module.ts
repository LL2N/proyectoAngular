import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: '', component: LoginComponent}
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule {
}