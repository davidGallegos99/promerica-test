import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './components/home/home.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MessageComponent } from './components/message/message.component';
import { ClienteModule } from './components/cliente/cliente.module';
import { ProductoModule } from './components/producto/producto.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    ProductoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
