import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ClienteModule } from './components/cliente/cliente.module';
import { ProductoModule } from './components/producto/producto.module';
import { OrdenModule } from './components/orden/orden.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    ProductoModule,
    OrdenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
