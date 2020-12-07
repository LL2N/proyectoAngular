import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TarifasService } from '../../../shared/services/tarifas.service';

@Component({
  selector: 'app-form-tarifa',
  templateUrl: './form-tarifa.component.html',
  styleUrls: ['./form-tarifa.component.css']
})
export class FormTarifaComponent implements OnInit {

  tarifaSubs: Subscription;
  tarifaForm: FormGroup;
  
  constructor(private router: Router, private tarifasService: TarifasService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tarifaForm = this.formBuilder.group({
      imageUrl: ['', [Validators.required]],
      efectivoDiurno: ['', [Validators.required]],
      efectivoNocturno: ['', [Validators.required]],
      tarjetaDiurno: ['', [Validators.required]],
      tarjetaNocturno: ['', [Validators.required]],
      titulo: ['', [Validators.required]]
    });
  }

    onCancel(){
    this.router.navigate(['editor/pages/rutas/tarifas']);
  }
  onCreate(form: any): void {
    console.log('FORM: ', this.tarifaForm.value);

      this.tarifaSubs = this.tarifasService.addTarifa({
      ...this.tarifaForm.value
    }).subscribe(
      ()  => {
      this.onCancel();
    }
    );
  }

}