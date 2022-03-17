import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Product } from './interfaces/Product.interface';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit {

  @Input() products: Product[] = [];
  constructor(
    private router: Router,
    private productoService :ProductoService
  ) { }

  ngOnInit(): void {
  }

  showProduct(product:Product){
    this.router.navigate(['mi-tienda/producto', product.id])
    this.productoService.product$.next(product);
  }

}
