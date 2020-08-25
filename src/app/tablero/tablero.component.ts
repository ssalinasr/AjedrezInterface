import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';
import { Celda } from '../celda';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  
  title = 'Ajedrez Mágico';
  filas = [];

  nombre1: string=this.navCtrl.get('name1');
  nombre2: string=this.navCtrl.get('name2');

  jugador1: Jugador = {
    id: 1,
    color: "blanco",
    name: this.nombre1
  };
  jugador2: Jugador = {
    id: 1,
    color: "negro",
    name: this.nombre2
  };

  constructor(public navCtrl: NgxNavigationWithDataComponent) { 
    for(var i=0; i<8; i++){
      this.filas[i] = [];
      for(var j=0; j<8; j++){
        var celda : Celda ={
          clase : "",
          id : "",
          imagen : ""
        };
         
        if(i == 7){
           if(j == 0 || j == 7){
             celda.imagen = "&#9814;";
           }
           if(j == 1 || j == 6){
             celda.imagen = "&#9816;";
           }
           if(j == 2 || j == 5){
             celda.imagen = "&#9815;";
           }
           if(j == 4){
             celda.imagen = "&#9812;";
           }
           if(j == 3){
            celda.imagen = "&#9812;";
           }
        }

        if(i == 0){
          if(j == 0 || j == 7){
            celda.imagen = "&#9820;";
          }
          if(j == 1 || j == 6){
            celda.imagen = "&#9822;";
          }
          if(j == 2 || j == 5){
            celda.imagen = "&#9821;";
          }
          if(j == 4){
            celda.imagen = "&#9818;";
          }
          if(j == 3){
           celda.imagen = "&#9819;";
          }
        }

        if(i == 1){
          celda.imagen = "&#9823;";

        }

        if(i == 6){
          celda.imagen = "&#9817;";
        }

        celda.id = i+""+j;
        if((i + j) % 2 == 0){
          celda.clase = 'posicion2';
        }else{
          celda.clase = 'posicion1';
        }
        this.filas[i][j] = celda;
      }
    }
  }

 loadImage(){
    for(var i = 0; i < 8 ; i++){
        for(var j = 0; j < 8; j++){
            document.getElementById(i+""+j).innerHTML = this.filas[i][j].imagen;
        }
    }
    
};
  

  ngOnInit() {
  }

}

