import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../../../shared/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias = [];

  constructor(private NoticiasService: NoticiasService) { 
    
  }

  ngOnInit() {
    this.NoticiasService.getNoticias().subscribe( res => {
      Object.entries(res).map(noticia => this.noticias.push(noticia[1]))
    }

    )
  }
}