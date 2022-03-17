import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clienteroutes } from '../cliente/cliente-routing';
import { ClienteComponent } from '../cliente/cliente.component';
import { productoRoutes } from '../producto/producto-app-routing';
import { HomeComponent } from './home.component';


const routes:Routes = [
  {
    path:'mi-tienda',

    children:[
      {path:'', pathMatch:'full', component:HomeComponent},
      {
        path:'cliente', children:[...Clienteroutes]
      },
      {
        path:'producto', children:[...productoRoutes]
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class HomeRoutingModule {}
