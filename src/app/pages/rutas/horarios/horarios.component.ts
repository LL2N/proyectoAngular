import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../../../shared/services/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios = [];

  constructor(private HorariosService: HorariosService) { 
    
  }

  ngOnInit() {
    this.HorariosService.getHorarios().subscribe( res => {
      Object.entries(res).map(horario => this.horarios.push(horario[1]))
    }

    )
  }

}