import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UsuariosService } from '../../shared/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios = [];

  constructor(private router: Router,
              private authService: AuthService, private UsuariosService : UsuariosService) {
  }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['editor/pages']);
    }

    this.UsuariosService.getUsuarios().subscribe( res => {
      Object.entries(res).map((p: any) => this.usuarios.push({id: p[0], ...p[1]}));
    })
  }

  onLogin(form: any): void {
    console.log('FORM: ', form.value);

    for(let usuario of this.usuarios)
    if(usuario.email===form.value.email && usuario.estado==="activado")
      this.authService.login({
        email: form.value.email,
        password: form.value.password,
        returnSecureToken: true
      }).subscribe(
        res => {
          console.log('LOGIN RESPONSE: ', res);
          this.router.navigate(['editor/pages']);
        },
        err => {
          console.log('LOGIN ERROR: ');
        }
      );
    else
      console.log('LOGIN ERROR: ESTA CUENTA SE ENCUENTRA DESACTIVADA O NO EXISTE');

  }

}
