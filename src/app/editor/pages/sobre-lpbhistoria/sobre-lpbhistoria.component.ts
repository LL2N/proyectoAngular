import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriasService } from '../../../shared/services/historias.service';

@Component({
  selector: 'app-sobre-lpbhistoria',
  templateUrl: './sobre-lpbhistoria.component.html',
  styleUrls: ['./sobre-lpbhistoria.component.css']
})
export class SobreLPBhistoriaComponent implements OnInit {

  historias = [];

  constructor(private router: Router, private HistoriasService: HistoriasService) { }

  ngOnInit() {
    this.HistoriasService.getHistorias().subscribe( res => {
      Object.entries(res).map(historia => this.historias.push(historia[1]))
    }

    )
  }
  openForm(){
    this.router.navigate(['editor/forms/formhistoria']);
  }

}