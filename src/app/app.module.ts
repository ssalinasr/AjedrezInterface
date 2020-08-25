  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    ComunicacionComponent,
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
