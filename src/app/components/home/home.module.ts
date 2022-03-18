import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteModule } from '../cliente/cliente.module';
import { ProductoModule } from '../producto/producto.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MessageComponent } from '../message/message.component';
import { NoValuesPipe } from 'src/app/pipes/noValue.pipe';
import { ErrorDirective } from '../directives/error.directive';



@NgModule({
  declarations: [
    HomeComponent,
    MessageComponent,
    NoValuesPipe,
    ErrorDirective
  ],
  exports:[
    MessageComponent,
    NoValuesPipe,
    ErrorDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule

  ]
})
export class HomeModule { }
