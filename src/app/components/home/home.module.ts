import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteModule } from '../cliente/cliente.module';
import { ProductoModule } from '../producto/producto.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MessageComponent } from '../message/message.component';
import { NoValuesPipe } from 'src/app/pipes/noValue.pipe';
import { ErrorDirective } from '../directives/error.directive';
import { FormatDatePipe } from 'src/app/pipes/format-date.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    MessageComponent,
    NoValuesPipe,
    ErrorDirective,
    FormatDatePipe,

  ],
  exports:[
    MessageComponent,
    NoValuesPipe,
    ErrorDirective,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule

  ]
})
export class HomeModule { }
