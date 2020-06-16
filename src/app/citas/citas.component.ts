import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl:'./citas.component.html',
  styleUrls: ['./citas.component.sass']
})
export class CitasComponent implements OnInit {

  @Input() Usuarioid='';
  displayedColumns = ['Lunes', 'martes', 'mircoles', 'Jueves', 'Viernes', 'Sabado', 'id'];
  dataSource = [];
  valueData= [];
  favoriteSeason: string;
  valueDos= ELEMENT_DATA;
  turnos: string;
  constructor() {
  
   }

   optenerTurnos(hora, dia, id){
    
    if(confirm('esta seguro de optener este turno: '+hora+' el dia: '+dia))
     {
       if(dia=='Lunes')
       {
       this.valueDos[id-1].Lunes='0';
       } else if(dia=='martes'){
        this.valueDos[id-1].martes='0';
       } else if(dia=='mircoles'){
        this.valueDos[id-1].mircoles='0';
       }else if(dia=='Jueves'){
        this.valueDos[id-1].Jueves='0';
       }else if(dia=='Viernes'){
        this.valueDos[id-1].Viernes='0';
       }else if(dia=='Sabado'){
        this.valueDos[id-1].Sabado='0';
       }
    }
   
   }

  public BuscarCitasPorMedico(id)
   {
 
    for(let i=0; i< ELEMENT_DATA.length; i++)
     {
       if(ELEMENT_DATA[i].id_usuario === id)
       {
        console.log(id+'=='+ELEMENT_DATA[i].id_usuario);  
        this.valueData.push(ELEMENT_DATA[i]);
        this.Usuarioid='id';
       }
     }
     if(this.valueData.length>0)
     {
       this.dataSource= this.valueData;
      
       return this.dataSource;
     }
     console.log('false');
     return true;
   }

  ngOnInit(): void {
    this.valueDos= ELEMENT_DATA;
  }

}



export interface PeriodicElement {
  Lunes: string;
  martes: string;
  mircoles: string;
  Jueves: string;
  Viernes: string;
  Sabado: string;
  id: number;
  id_usuario: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, id_usuario:3, Lunes: '7 AM', martes: '7 AM',  mircoles: '0', Jueves: '6:50 Am', Viernes:'8:30 AM', Sabado:'7:30 AM '},
  {id:2, id_usuario:3, Lunes: '8:30 AM', martes: '8:30 AM', mircoles: '0', Jueves: '7:50 Am', Viernes:'9:30 AM', Sabado:'8:30 AM '},
  {id:3, id_usuario:3, Lunes: '9:50 AM', martes: '9:50 AM,', mircoles: '2:35 pm', Jueves: '8:50 Am', Viernes:'10:30 AM', Sabado:'9:30 AM '},
  {id:4, id_usuario:3, Lunes: '10:20 AM', martes: '10:20 AM,', mircoles: '0', Jueves: '9:50 Am', Viernes:'11:30 AM', Sabado:'10:30 AM '},
  {id:5, id_usuario:3, Lunes: '11:20 AM', martes: '11:20 AM,', mircoles: '0', Jueves: '10:50 Am', Viernes:'12:30 PM', Sabado:'11:30 AM '},
  {id:6, id_usuario:3, Lunes: '2:20 PM', martes: '0', mircoles: '0', Jueves: '11:50 Am', Viernes:'2:30 PM', Sabado:'2:30 PM '},
  {id:7, id_usuario:3, Lunes: '3:40 pM', martes: '3:40 pM,', mircoles: '0', Jueves: '12:50 Am', Viernes:'3:30 PM', Sabado:'3:30 PM '},
  {id:8, id_usuario:3, Lunes: '5:20 pM', martes: '5:20 pM,', mircoles: '0', Jueves: '13:50 Am', Viernes:'4:30 PM', Sabado:'4:30 PM '},
  {id:9, id_usuario:3, Lunes: '6:30pm', martes: '6:30pm',  mircoles: '0', Jueves: '2:50 Am', Viernes:'5:30 PM', Sabado:'6:30 PM'},
];