import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteTablaComponent } from './cliente-tabla/cliente-tabla.component';
import { ClienteComponent } from './cliente.component';
import { HttpClientModule } from '@angular/common/http'
import { NoValuesPipe } from 'src/app/pipes/noValue.pipe';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    ClienteComponent,
    ClienteTablaComponent,
    AgregarClienteComponent,
    VerClienteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule
  ],
  exports:[
    ClienteComponent,
    ClienteTablaComponent
  ]
})
export class ClienteModule { }
