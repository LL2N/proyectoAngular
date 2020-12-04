import { Component, OnInit } from '@angular/core';
import { HistoriasService } from '../../../shared/services/historias.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  historias = [];

  constructor(private HistoriasService: HistoriasService) { 
    
  }

  ngOnInit() {
    this.HistoriasService.getHistorias().subscribe( res => {
      Object.entries(res).map(historia => this.historias.push(historia[1]))
    }

    )
  }
}