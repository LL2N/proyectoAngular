import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../shared/services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  rutas = [];

  constructor(private RutasService: RutasService, private router: Router) { 
    
  }

  ngOnInit() {
    this.RutasService.getRutas().subscribe( res => {
      Object.entries(res).map(ruta => this.rutas.push(ruta[1]))
    }

    )
  }
  
  
    goRuta(){
    this.router.navigate(['pages/rutas/ruta']);
  }


}
