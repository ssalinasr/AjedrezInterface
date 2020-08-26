import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandosService } from '../comandos.service';
import { Celda } from '../celda';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css'],
  providers: [ComandosService]
})
export class ComunicacionComponent implements OnInit {

  isDisabled1:boolean = false;
  isDisabled2:boolean = true;

  comando = "Prueba";
  resultado = "";
  filas = [];


  constructor(private http: ComandosService) { }

  enviarComando(event: any, tipo : any){
    if(tipo == "comando_1"){
      this.http.respuestaLlamdoServlet(tipo+":"+event.target.value).subscribe((data:any)=>{
        console.log(data.resultado);
        console.log(data.mate_1);
        console.log(data.mate_2);
        if(data.resultado == "true"){
          this.isDisabled2 = false;
          this.isDisabled1 = true;
        }
        if(data.mate_1 == "true"){
          this.isDisabled1 = true;
          this.isDisabled2 = true;
          document.getElementById("resgame").innerHTML = "El jugador 1 es el ganador";
        }
        if(data.mate_2 == "true"){
          this.isDisabled1 = true;
          this.isDisabled2 = true;
          document.getElementById("resgame").innerHTML = "El jugador 2 es el ganador";
        }

        this.updateImage();
      });
    }
    else{
      if(tipo == "comando_2"){
        this.http.respuestaLlamdoServlet(tipo+":"+event.target.value).subscribe((data:any)=>{
          console.log(data.resultado);
          console.log(data.mate_1);
          console.log(data.mate_2);

          if(data.resultado == "true"){
            this.isDisabled1 = false;
            this.isDisabled2 = true;
          }
          if(data.mate_1 == "true"){
            this.isDisabled1 = true;
            this.isDisabled2 = true;
            document.getElementById("resgame").innerHTML = "El jugador 1 es el ganador";
          }
          if(data.mate_2 == "true"){
            this.isDisabled1 = true;
            this.isDisabled2 = true;
            document.getElementById("resgame").innerHTML = "El jugador 2 es el ganador";
          }


          this.updateImage();
        });
      }
    }
 }

 restartImage(){
  this.isDisabled1 = false;
  this.isDisabled2 = true;
  this.loadImage();
  
 }

 updateImage(){
  this.http.respuestaLlamdoServlet("actualizar").subscribe((data:any)=>{
    console.log(data);
    document.getElementById("00").innerHTML = data.ficha00;
    document.getElementById("01").innerHTML = data.ficha01;
    document.getElementById("02").innerHTML = data.ficha02;
    document.getElementById("03").innerHTML = data.ficha03;
    document.getElementById("04").innerHTML = data.ficha04;
    document.getElementById("05").innerHTML = data.ficha05;
    document.getElementById("06").innerHTML = data.ficha06;
    document.getElementById("07").innerHTML = data.ficha07;

    document.getElementById("10").innerHTML = data.ficha10;
    document.getElementById("11").innerHTML = data.ficha11;
    document.getElementById("12").innerHTML = data.ficha12;
    document.getElementById("13").innerHTML = data.ficha13;
    document.getElementById("14").innerHTML = data.ficha14;
    document.getElementById("15").innerHTML = data.ficha15;
    document.getElementById("16").innerHTML = data.ficha16;
    document.getElementById("17").innerHTML = data.ficha17;

    document.getElementById("20").innerHTML = data.ficha20;
    document.getElementById("21").innerHTML = data.ficha21;
    document.getElementById("22").innerHTML = data.ficha22;
    document.getElementById("23").innerHTML = data.ficha23;
    document.getElementById("24").innerHTML = data.ficha24;
    document.getElementById("25").innerHTML = data.ficha25;
    document.getElementById("26").innerHTML = data.ficha26;
    document.getElementById("27").innerHTML = data.ficha27;

    document.getElementById("30").innerHTML = data.ficha30;
    document.getElementById("31").innerHTML = data.ficha31;
    document.getElementById("32").innerHTML = data.ficha32;
    document.getElementById("33").innerHTML = data.ficha33;
    document.getElementById("34").innerHTML = data.ficha34;
    document.getElementById("35").innerHTML = data.ficha35;
    document.getElementById("36").innerHTML = data.ficha36;
    document.getElementById("37").innerHTML = data.ficha37;

    document.getElementById("40").innerHTML = data.ficha40;
    document.getElementById("41").innerHTML = data.ficha41;
    document.getElementById("42").innerHTML = data.ficha42;
    document.getElementById("43").innerHTML = data.ficha43;
    document.getElementById("44").innerHTML = data.ficha44;
    document.getElementById("45").innerHTML = data.ficha45;
    document.getElementById("46").innerHTML = data.ficha46;
    document.getElementById("47").innerHTML = data.ficha47;

    document.getElementById("50").innerHTML = data.ficha50;
    document.getElementById("51").innerHTML = data.ficha51;
    document.getElementById("52").innerHTML = data.ficha52;
    document.getElementById("53").innerHTML = data.ficha53;
    document.getElementById("54").innerHTML = data.ficha54;
    document.getElementById("55").innerHTML = data.ficha55;
    document.getElementById("56").innerHTML = data.ficha56;
    document.getElementById("57").innerHTML = data.ficha57;

    document.getElementById("60").innerHTML = data.ficha60;
    document.getElementById("61").innerHTML = data.ficha61;
    document.getElementById("62").innerHTML = data.ficha62;
    document.getElementById("63").innerHTML = data.ficha63;
    document.getElementById("64").innerHTML = data.ficha64;
    document.getElementById("65").innerHTML = data.ficha65;
    document.getElementById("66").innerHTML = data.ficha66;
    document.getElementById("67").innerHTML = data.ficha67;

    document.getElementById("70").innerHTML = data.ficha70;
    document.getElementById("71").innerHTML = data.ficha71;
    document.getElementById("72").innerHTML = data.ficha72;
    document.getElementById("73").innerHTML = data.ficha73;
    document.getElementById("74").innerHTML = data.ficha74;
    document.getElementById("75").innerHTML = data.ficha75;
    document.getElementById("76").innerHTML = data.ficha76;
    document.getElementById("77").innerHTML = data.ficha77;
  });

}

  loadImage(){
    this.http.respuestaLlamdoServlet("cargar").subscribe((data:any)=>{
      console.log(data);
      document.getElementById("00").innerHTML = data.ficha00;
      document.getElementById("01").innerHTML = data.ficha01;
      document.getElementById("02").innerHTML = data.ficha02;
      document.getElementById("03").innerHTML = data.ficha03;
      document.getElementById("04").innerHTML = data.ficha04;
      document.getElementById("05").innerHTML = data.ficha05;
      document.getElementById("06").innerHTML = data.ficha06;
      document.getElementById("07").innerHTML = data.ficha07;

      document.getElementById("10").innerHTML = data.ficha10;
      document.getElementById("11").innerHTML = data.ficha11;
      document.getElementById("12").innerHTML = data.ficha12;
      document.getElementById("13").innerHTML = data.ficha13;
      document.getElementById("14").innerHTML = data.ficha14;
      document.getElementById("15").innerHTML = data.ficha15;
      document.getElementById("16").innerHTML = data.ficha16;
      document.getElementById("17").innerHTML = data.ficha17;

      document.getElementById("20").innerHTML = data.ficha20;
      document.getElementById("21").innerHTML = data.ficha21;
      document.getElementById("22").innerHTML = data.ficha22;
      document.getElementById("23").innerHTML = data.ficha23;
      document.getElementById("24").innerHTML = data.ficha24;
      document.getElementById("25").innerHTML = data.ficha25;
      document.getElementById("26").innerHTML = data.ficha26;
      document.getElementById("27").innerHTML = data.ficha27;

      document.getElementById("30").innerHTML = data.ficha30;
      document.getElementById("31").innerHTML = data.ficha31;
      document.getElementById("32").innerHTML = data.ficha32;
      document.getElementById("33").innerHTML = data.ficha33;
      document.getElementById("34").innerHTML = data.ficha34;
      document.getElementById("35").innerHTML = data.ficha35;
      document.getElementById("36").innerHTML = data.ficha36;
      document.getElementById("37").innerHTML = data.ficha37;

      document.getElementById("40").innerHTML = data.ficha40;
      document.getElementById("41").innerHTML = data.ficha41;
      document.getElementById("42").innerHTML = data.ficha42;
      document.getElementById("43").innerHTML = data.ficha43;
      document.getElementById("44").innerHTML = data.ficha44;
      document.getElementById("45").innerHTML = data.ficha45;
      document.getElementById("46").innerHTML = data.ficha46;
      document.getElementById("47").innerHTML = data.ficha47;

      document.getElementById("50").innerHTML = data.ficha50;
      document.getElementById("51").innerHTML = data.ficha51;
      document.getElementById("52").innerHTML = data.ficha52;
      document.getElementById("53").innerHTML = data.ficha53;
      document.getElementById("54").innerHTML = data.ficha54;
      document.getElementById("55").innerHTML = data.ficha55;
      document.getElementById("56").innerHTML = data.ficha56;
      document.getElementById("57").innerHTML = data.ficha57;

      document.getElementById("60").innerHTML = data.ficha60;
      document.getElementById("61").innerHTML = data.ficha61;
      document.getElementById("62").innerHTML = data.ficha62;
      document.getElementById("63").innerHTML = data.ficha63;
      document.getElementById("64").innerHTML = data.ficha64;
      document.getElementById("65").innerHTML = data.ficha65;
      document.getElementById("66").innerHTML = data.ficha66;
      document.getElementById("67").innerHTML = data.ficha67;

      document.getElementById("70").innerHTML = data.ficha70;
      document.getElementById("71").innerHTML = data.ficha71;
      document.getElementById("72").innerHTML = data.ficha72;
      document.getElementById("73").innerHTML = data.ficha73;
      document.getElementById("74").innerHTML = data.ficha74;
      document.getElementById("75").innerHTML = data.ficha75;
      document.getElementById("76").innerHTML = data.ficha76;
      document.getElementById("77").innerHTML = data.ficha77;
    });

  }

  ngOnInit() {
    
  }

}