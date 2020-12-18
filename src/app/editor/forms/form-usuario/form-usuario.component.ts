import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { UsuariosService } from '../../../shared/services/usuarios.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuario: any;
  usuarioSubs: Subscription;
  usuarioForm: FormGroup;

  constructor(private router: Router, public firebaseService : FirebaseService, private UsuariosService: UsuariosService, private formBuilder: FormBuilder) { };

  ngOnInit() {
   this.usuarioForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      estado: ['activado', [Validators.required]]
    });
  }
  onCancel(){
    this.router.navigate(['editor/pages/usuarios']);
  }

  onCreate(){

    this.usuarioSubs =this.UsuariosService.addUsuario({...this.usuarioForm.value}).subscribe(
      ()  => {
      
      this.firebaseService.signup( this.usuarioForm.value.email,this.usuarioForm.value.password)
      this.onCancel();
    }
    );
    
  }

}