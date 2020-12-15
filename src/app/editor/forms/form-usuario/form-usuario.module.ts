import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsuarioComponent } from './form-usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FirebaseService } from '../../../shared/services/firebase.service';

import {AngularFireModule} from '@angular/fire'
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: FormUsuarioComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCVd9ykpK8-YQMF3FRbUnfVPfM8_3cG4u4",
      authDomain: "proyectolpb2020.firebaseapp.com",
      databaseURL: "https://proyectolpb2020.firebaseio.com",
      projectId: "fir-angular-auth-2822d",
      storageBucket: "proyectolpb2020.appspot.com"
    })
  ],
  exports: [RouterModule],
  declarations: [FormUsuarioComponent],
  providers: [
    FirebaseService
  ]
})
export class FormUsuarioModule { }