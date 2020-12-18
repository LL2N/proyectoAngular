import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComunicadosService } from '../../../shared/services/comunicados.service';

@Component({
  selector: 'app-form-comunicado',
  templateUrl: './form-comunicado.component.html',
  styleUrls: ['./form-comunicado.component.css']
})
export class FormComunicadoComponent implements OnInit {
  comunicadoSubs: Subscription;
comunicadoForm: FormGroup;

  constructor(private router: Router, private comunicadosService: ComunicadosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
        this.comunicadoForm = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      texto: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  onCancel(){
    this.router.navigate(['editor/pages/nyc/comunicados']);
  }
  onCreate(): void {
    console.log('FORM: ', this.comunicadoForm.value);

      this.comunicadoSubs = this.comunicadosService.addComunicado({
      ...this.comunicadoForm.value
    }).subscribe(
      ()  => {
      this.onCancel();
    }
    );
  }

}