import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Jugador } from '../Jugador';
import {Router} from "@angular/router";
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent implements OnInit {

  jugador1: Jugador={id:1,color:'Blanco',name:''};
  jugador2: Jugador={id:2,color:'Negro',name:''};
  constructor(public navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.jugador1);
    console.log(this.jugador2);
    this.navCtrl.navigate('/tablero', {name1:this.jugador1.name,name2:this.jugador2.name});
  }



}
