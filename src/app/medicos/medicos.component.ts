import { Component, OnInit } from '@angular/core';
import { Medico } from '../Medicos';
import { MEDICOS } from '../mock-medicos';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {CitasComponent} from '../citas/citas.component'
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.sass']
})


export class MedicosComponent implements OnInit {

  medicos = MEDICOS;
  classStart= '';
  Usuarioid='';
  selectedMedico: Medico;
  serchDatos:string;
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
   
  }
  
 openDialog() {
  let val;
   let datais= new CitasComponent();

    datais.dataSource= val;
    console.log('val:::'+val);
   
   const dialogRef = this.dialog.open(CitasComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 
  }
  
onSelect(medicos: Medico): void {
  this.selectedMedico = medicos;
}

  ngOnInit(): void {
  
  }

}
