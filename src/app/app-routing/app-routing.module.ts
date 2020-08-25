import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from '../bienvenida/bienvenida.component';
import { TableroComponent } from '../tablero/tablero.component';

const appRoutes: Routes = [
  { path: 'tablero', component: TableroComponent},
  { path: 'login', component: BienvenidaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];
export const Routing = RouterModule.forRoot(appRoutes);
