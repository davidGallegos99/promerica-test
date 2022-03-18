import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clienteroutes } from './components/cliente/cliente-routing';
import { HomeComponent } from './components/home/home.component';
import { orderRoutes } from './components/orden/orden-routing';
import { productoRoutes } from './components/producto/producto-app-routing';

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
      },
      {
        path:'orden', children:[...orderRoutes]
      }
    ]
  },
  {
    path:'**',
    redirectTo:'mi-tienda'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
