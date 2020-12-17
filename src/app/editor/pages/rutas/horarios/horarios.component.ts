import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HorariosService } from '../../../../shared/services/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios = [];

    
  horarioSubs: Subscription;
  horarioGetSubs: Subscription;
  horarioDeleteSubs: Subscription;
  horarioUpdateSubs: Subscription;

  constructor(private HorariosService: HorariosService, private router: Router) { 
    
  }

  ngOnInit() {
    this.loadProduct();
    
  }

  loadProduct(): void {
    this.horarios = [];
    this.horarioGetSubs = this.HorariosService.getHorarios().subscribe( res => {
      Object.entries(res).map((p: any) => this.horarios.push({id: p[0], ...p[1]}));
    }

    )
  }

  onDelete(id: any): void {
    console.log('RESPONSE: ', id);
    this.horarioDeleteSubs = this.HorariosService.deleteHorario(id).subscribe(
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
    this.router.navigate(['editor/forms/formhorario']);
  }

}