import { Component, OnInit } from '@angular/core';
import { Medico } from '../Medicos';
import { MEDICOS } from '../mock-medicos';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.sass']
})


export class MedicosComponent implements OnInit {

  medicos = MEDICOS;
  classStart= '';

  selectedMedico: Medico;

  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
   
  }

onSelect(medicos: Medico): void {
  this.selectedMedico = medicos;
}

  ngOnInit(): void {
  
  }

}
