import { Routes } from "@angular/router";
import { AgregarOrdenComponent } from "./agregar-orden/agregar-orden.component";
import { OrdenComponent } from "./orden.component";


export const orderRoutes: Routes = [
  {path:'',component:OrdenComponent},
  {path:'agregar',component:AgregarOrdenComponent}
]
