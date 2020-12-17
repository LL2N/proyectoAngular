import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HistoriasService } from '../../../shared/services/historias.service';

@Component({
  selector: 'app-sobre-lpbhistoria',
  templateUrl: './sobre-lpbhistoria.component.html',
  styleUrls: ['./sobre-lpbhistoria.component.css']
})
export class SobreLPBhistoriaComponent implements OnInit {

  historias = [];

  historiaSubs: Subscription;
  historiaGetSubs: Subscription;
  historiaDeleteSubs: Subscription;
  historiaUpdateSubs: Subscription;

  constructor(private router: Router, private HistoriasService: HistoriasService) { }

  ngOnInit() {
    this.loadProduct();
    
  }

  loadProduct(): void {
    this.historias = [];
    this.historiaGetSubs = this.HistoriasService.getHistorias().subscribe( res => {
      Object.entries(res).map((p: any) => this.historias.push({id: p[0], ...p[1]}));
    }

    )
  }

  onDelete(id: any): void {
    console.log('RESPONSE: ', id);
    this.historiaDeleteSubs = this.HistoriasService.deleteHistoria(id).subscribe(
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
    this.router.navigate(['editor/forms/formhistoria']);
  }

}