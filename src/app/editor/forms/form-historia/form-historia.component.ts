import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HistoriasService } from '../../../shared/services/historias.service';

@Component({
  selector: 'app-form-historia',
  templateUrl: './form-historia.component.html',
  styleUrls: ['./form-historia.component.css']
})
export class FormHistoriaComponent implements OnInit {
  historiaSubs: Subscription;
  historiaForm: FormGroup;

  constructor(private router: Router, private historiasService: HistoriasService, private formBuilder: FormBuilder) { }

  ngOnInit() {
            this.historiaForm = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      texto: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onCancel(){
    this.router.navigate(['editor/pages/sobrelpb']);
  }
  onCreate(form: any): void {
    console.log('FORM: ', this.historiaForm.value);

      this.historiaSubs = this.historiasService.addHistoria({
      ...this.historiaForm.value
    }).subscribe(
      ()  => {
      this.onCancel();
    }
    );
  }

}