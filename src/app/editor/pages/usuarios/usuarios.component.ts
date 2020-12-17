import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuariosService } from '../../../shared/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    usuarios = [];

  usuarioSubs: Subscription;
  usuarioGetSubs: Subscription;
  usuarioDeleteSubs: Subscription;
  usuarioUpdateSubs: Subscription;

  constructor(private router: Router, private UsuariosService: UsuariosService) { }

  ngOnInit() {
    this.loadProduct();
    
  }

  loadProduct(): void {
    this.usuarios = [];
    this.usuarioGetSubs = this.UsuariosService.getUsuarios().subscribe( res => {
      Object.entries(res).map((p: any) => this.usuarios.push({id: p[0], ...p[1]}));
    }

    )
  }

  onUpdate(id: any, usuario: any): void {
    console.log('RESPONSE: ', usuario);
    if (usuario.estado === "activado")
      usuario.estado="desactivado"
    else
      usuario.estado="activado"

    this.usuarioDeleteSubs = this.UsuariosService.updateUsuario(id, usuario).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  
  }
  openForm(){
    this.router.navigate(['editor/forms/formusuario']);
  }

}