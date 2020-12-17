import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoticiasService } from '../../../../shared/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias = [];
  
  noticiaSubs: Subscription;
  noticiaGetSubs: Subscription;
  noticiaDeleteSubs: Subscription;
  noticiaUpdateSubs: Subscription;

  constructor(private NoticiasService: NoticiasService, private router: Router) { 
    
  }

  ngOnInit() {

    this.loadProduct();
    
  }

  loadProduct(): void {
    this.noticias = [];
    this.noticiaGetSubs = this.NoticiasService.getNoticias().subscribe( res => {
      Object.entries(res).map((p: any) => this.noticias.push({id: p[0], ...p[1]}));
    }

    )
  }

  onDelete(id: any): void {
    console.log('RESPONSE: ', id);
    this.noticiaDeleteSubs = this.NoticiasService.deleteNoticia(id).subscribe(
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
    this.router.navigate(['editor/forms/formnoticia']);
  }
}