import { Component, OnInit } from '@angular/core';
import { ComunicadosService } from '../../../shared/services/comunicados.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  comunicados = [];

  constructor(private ComunicadosService: ComunicadosService) { 
    
  }

  ngOnInit() {
    this.ComunicadosService.getComunicados().subscribe( res => {
      Object.entries(res).map(comunicado => this.comunicados.push(comunicado[1]))
    }

    )
  }

}