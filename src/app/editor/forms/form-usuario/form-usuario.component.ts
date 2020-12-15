import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../shared/services/firebase.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  constructor(private router: Router, public firebaseService : FirebaseService) { };

  ngOnInit() {
  }
  onCancel(){
    this.router.navigate(['editor/pages/usuarios']);
  }

  onCreate(email:string,password:string){
    this.firebaseService.signup(email,password).then(
      ()  => {
      this.onCancel();
    }
    );
    
  }

}