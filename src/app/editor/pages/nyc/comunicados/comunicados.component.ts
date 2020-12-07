import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComunicadosService } from '../../../../shared/services/comunicados.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  
  comunicadoDeleteSubs: Subscription;
  comunicados = [];
  comunicadosGetSubs: Subscription;

  constructor(private ComunicadosService: ComunicadosService, private router: Router) { 
    
  }

  ngOnInit() {

    this.loadComunicados();
    this.ComunicadosService.getComunicados().subscribe( res => {
      Object.entries(res).map(comunicado => this.comunicados.push(comunicado[1]))
    });
  }

  loadComunicados(): void {
    this.comunicados = [];

    this.comunicadosGetSubs = this.ComunicadosService.getComunicados().subscribe( res => {
      Object.entries(res).map(comunicado => this.comunicados.push(comunicado[1]))
    });
  }

  openForm(){
    this.router.navigate(['editor/forms/formcomunicado']);
  }

  onDelete(id: any): void {
    this.comunicadoDeleteSubs = this.ComunicadosService.deleteComunicado(id).subscribe(() => this.loadComunicados());

    console.log('Comunicado: ', this.ComunicadosService.getComunicadoById(id));
  }

}