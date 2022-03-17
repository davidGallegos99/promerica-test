import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './producto-tabla/interfaces/Product.interface';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public products: Product[] = [];
  public message:string = ''

  constructor(
    public productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClients()
    this.productoService.message$.subscribe({
      next:(message) => {
        this.message = message;
        console.log(this.message);

      }
    })
  }

  getClients() {
    this.productoService.getProduct().subscribe({
      next: (products) => {
        this.products = products
      }
    })
  }



  redirectToAdd(){
    this.router.navigate(['mi-tienda/producto/agregar'])
  }
}
