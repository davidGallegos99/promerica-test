import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';
import { ProductoComponent } from './producto.component';
import { HomeModule } from '../home/home.module';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductoComponent,
    ProductoTablaComponent,
    AgregarProductoComponent,
    VerProductoComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class ProductoModule { }
