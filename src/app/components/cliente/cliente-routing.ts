import {  Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ClienteComponent } from './cliente.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';

export const Clienteroutes: Routes = [

      {path:'', component:ClienteComponent},
      {path:'agregar', component:AgregarClienteComponent},
      {path:':id', component:VerClienteComponent}


]

