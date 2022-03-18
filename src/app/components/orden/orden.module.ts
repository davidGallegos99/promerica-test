import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenComponent } from './orden.component';
import { AgregarOrdenComponent } from './agregar-orden/agregar-orden.component';
import { HomeModule } from '../home/home.module';
import { OrdenTablaComponent } from './orden-tabla/orden-tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDirective } from '../directives/error.directive';



@NgModule({
  declarations: [
    OrdenComponent,
    AgregarOrdenComponent,
    OrdenTablaComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ReactiveFormsModule
  ]
})
export class OrdenModule { }
