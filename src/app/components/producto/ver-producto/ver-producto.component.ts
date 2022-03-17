import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../producto-tabla/interfaces/Product.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  componentDestroyed$: Subject<boolean> = new Subject()
  public data:Product = {
    id:"",
    nombre: "",
    descripcion: "",
    precio: ""
  }


  constructor(
    private productService:ProductoService
  ) { }

  ngOnInit(): void {
    this.productService.product$.pipe(takeUntil(this.componentDestroyed$)).subscribe({
      next: (productoData) => {
        if(productoData.id) {
          localStorage.setItem('producto',JSON.stringify(productoData))
        }
        this.data = JSON.parse(localStorage.getItem('producto') || JSON.stringify(this.data)) ;
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()

  }

}
