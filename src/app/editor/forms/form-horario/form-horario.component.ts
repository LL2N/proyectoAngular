import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HorariosService } from '../../../shared/services/horarios.service';

@Component({
  selector: 'app-form-horario',
  templateUrl: './form-horario.component.html',
  styleUrls: ['./form-horario.component.css']
})
export class FormHorarioComponent implements OnInit {
  horarioSubs: Subscription;
  horarioForm: FormGroup;
  
  constructor(private router: Router, private horariosService: HorariosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.horarioForm = this.formBuilder.group({
      horario: ['', [Validators.required]],
      frecuencia: ['', [Validators.required]]
    });
  }

    onCancel(){
    this.router.navigate(['editor/pages//rutas/horarios']);
  }
  onCreate(): void {
    console.log('FORM: ', this.horarioForm.value);

      this.horarioSubs = this.horariosService.addHorario({
      ...this.horarioForm.value
    }).subscribe(
      ()  => {
      this.onCancel();
    }
    );
  }

}