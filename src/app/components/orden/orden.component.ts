import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from './interfaces/Order.interface';
import { OrdenService } from './services/orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  public orders: Order[] = [];
  public message:string = ''

  constructor(
    public orderService: OrdenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOrders()
    this.orderService.message$.subscribe({
      next:(message) => {
        this.message = message;
        console.log(this.message);

      }
    })
  }

  getOrders() {
    this.orderService.getOrder().subscribe({
      next: (orders) => {
        this.orders = orders
      }
    })
  }



  redirectToAdd(){
    this.router.navigate(['mi-tienda/orden/agregar'])
  }

}
