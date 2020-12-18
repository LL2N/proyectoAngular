import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoticiasService } from '../../../shared/services/noticias.service';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.css']
})
export class FormNoticiaComponent implements OnInit {

  noticiaSubs: Subscription;
  noticiaForm: FormGroup;
  
  constructor(private router: Router, private noticiasService: NoticiasService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.noticiaForm = this.formBuilder.group({
      imageUrl: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      texto: ['', [Validators.required]]
    });
  }

    onCancel(){
    this.router.navigate(['editor/pages/nyc/noticias']);
  }
  onCreate(): void {
    console.log('FORM: ', this.noticiaForm.value);

      this.noticiaSubs = this.noticiasService.addNoticia({
      ...this.noticiaForm.value
    }).subscribe(
      ()  => {
      this.onCancel();
    }
    );
  }


}