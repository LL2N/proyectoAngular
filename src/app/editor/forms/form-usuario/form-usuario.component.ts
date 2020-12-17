import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, public firebaseService : FirebaseService, private UsuariosService: UsuariosService) { };

  ngOnInit() {
  }
  onCancel(){
    this.router.navigate(['editor/pages/usuarios']);
  }

  onCreate(email:string,password:string){
    this.usuario = {"email": email, "estado": "activado"}

    console.log('Usuario: ', this.usuario);

    this.firebaseService.signup(email,password).then(
      ()  => {
      this.UsuariosService.addUsuario({"email": email, "estado": "activado"})
      this.onCancel();
    }
    );
    
  }

}