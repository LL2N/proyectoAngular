import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas = [];

  constructor(private TarifasService: TarifasService) { 
    
  }

  ngOnInit() {
    this.TarifasService.getTarifas().subscribe( res => {
      Object.entries(res).map(tarifa => this.tarifas.push(tarifa[1]))
    }

    )
  }


}