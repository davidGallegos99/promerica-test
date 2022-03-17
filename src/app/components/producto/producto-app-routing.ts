import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ProductoComponent } from './producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';

export const productoRoutes: Routes = [
  {path:'',component:ProductoComponent},
  {path:'agregar',component:AgregarProductoComponent},
  {path:':id',component:VerProductoComponent},
]


