import { Component, OnInit } from '@angular/core';
import { Medico } from '../Medicos';
import { MEDICOS } from '../mock-medicos';
import { from } from 'rxjs';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.sass']
})


export class MedicosComponent implements OnInit {

  medicos = MEDICOS;
  selectedMedico: Medico;

  
  constructor() { 

   
  }

onSelect(medicos: Medico): void {
  this.selectedMedico = medicos;
}

  ngOnInit(): void {
  }

}
