import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TarifasService } from '../../../../shared/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas = [];
  tarifaSubs: Subscription;
  tarifaGetSubs: Subscription;
  tarifaDeleteSubs: Subscription;
  tarifaUpdateSubs: Subscription;


  constructor(private TarifasService: TarifasService, private router: Router) { 
    
  }

  ngOnInit() {
    this.loadProduct();
    
  }

  loadProduct(): void {
    this.tarifas = [];
    this.tarifaGetSubs = this.TarifasService.getTarifas().subscribe( res => {
      Object.entries(res).map((p: any) => this.tarifas.push({id: p[0], ...p[1]}));
    }

    )
  }

  onDelete(id: any): void {
    console.log('RESPONSE: ', id);
    this.tarifaDeleteSubs = this.TarifasService.deleteTarifa(id).subscribe(
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
    this.router.navigate(['editor/forms/formtarifa']);
  }


}