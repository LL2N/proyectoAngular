import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RutasService } from '../../../shared/services/rutas.service';

@Component({
  selector: 'app-form-ruta',
  templateUrl: './form-ruta.component.html',
  styleUrls: ['./form-ruta.component.css']
})
export class FormRutaComponent implements OnInit {

  rutaSubs: Subscription;
  rutaForm: FormGroup;
  
  constructor(private router: Router, private rutasService: RutasService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rutaForm = this.formBuilder.group({
      imageUrl: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      videoUrl: ['', [Validators.required]]
    });
  }

    onCancel(){
    this.router.navigate(['editor/pages/rutas/lista']);
  }
  onCreate(): void {
    console.log('FORM: ', this.rutaForm.value);

      this.rutaSubs = this.rutasService.addRuta({
      ...this.rutaForm.value
    }).subscribe(
      ()  => {
      this.onCancel();
    }
    );
  }

}