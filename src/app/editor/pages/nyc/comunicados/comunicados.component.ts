import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicadosService } from '../../../../shared/services/comunicados.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  comunicados = [];

  constructor(private ComunicadosService: ComunicadosService, private router: Router) { 
    
  }

  ngOnInit() {
    this.ComunicadosService.getComunicados().subscribe( res => {
      Object.entries(res).map(comunicado => this.comunicados.push(comunicado[1]))
    }

    )
  }

  openForm(){
    this.router.navigate(['editor/forms/formcomunicado']);
  }

}