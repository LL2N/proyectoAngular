import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';
import { ComunicadosService } from '../../../../shared/services/comunicados.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {

  comunicados = [];
  
  comunicadoSubs: Subscription;
  comunicadoGetSubs: Subscription;
  comunicadoDeleteSubs: Subscription;
  comunicadoUpdateSubs: Subscription;

  constructor(private ComunicadosService: ComunicadosService, private router: Router,
              private authService: AuthService) { 
    
  }

  ngOnInit() {

    this.loadProduct();

    
  }

  loadProduct(): void {
    this.comunicados = [];
    this.comunicadoGetSubs = this.ComunicadosService.getComunicados().subscribe( res => {
      Object.entries(res).map((p: any) => this.comunicados.push({id: p[0], ...p[1]}));
    }

    )
  }

  onDelete(id: any): void {
    console.log('RESPONSE: ', id);
    this.comunicadoDeleteSubs = this.ComunicadosService.deleteComunicado(id).subscribe(
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
    this.router.navigate(['editor/forms/formcomunicado']);
  }

}