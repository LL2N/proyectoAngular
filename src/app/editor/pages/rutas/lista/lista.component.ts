import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RutasService } from '../../../../shared/services/rutas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  rutas = [];    
  rutaSubs: Subscription;
  rutaGetSubs: Subscription;
  rutaDeleteSubs: Subscription;
  rutaUpdateSubs: Subscription;

  constructor(private RutasService: RutasService, private router: Router) { 
    
  }

  ngOnInit() {

    this.loadProduct();
    
  }

  loadProduct(): void {
    this.rutas = [];
    this.rutaGetSubs = this.RutasService.getRutas().subscribe( res => {
      Object.entries(res).map((p: any) => this.rutas.push({id: p[0], ...p[1]}));
    }

    )
  }

  onDelete(id: any): void {
    console.log('RESPONSE: ', id);
    this.rutaDeleteSubs = this.RutasService.deleteRuta(id).subscribe(
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
    this.router.navigate(['editor/forms/formruta']);
  }

}