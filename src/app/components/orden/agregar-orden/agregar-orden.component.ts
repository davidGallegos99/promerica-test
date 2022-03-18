import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../../cliente/cliente-service.service';
import { Client } from '../../cliente/interfaces/cliente.interface';
import { Product } from '../../producto/producto-tabla/interfaces/Product.interface';
import { ProductoService } from '../../producto/services/producto.service';
import { Order } from '../interfaces/Order.interface';
import { OrdenService } from '../services/orden.service';

@Component({
  selector: 'app-agregar-orden',
  templateUrl: './agregar-orden.component.html',
  styleUrls: ['./agregar-orden.component.css']
})
export class AgregarOrdenComponent implements OnInit {

  public form: FormGroup;
  public show_error_message:boolean = false;
  public products:Product[] = [];
  public clients:Client[] = [];

  constructor(
    private fb:FormBuilder,
    private service: OrdenService,
    private productService: ProductoService,
    private clientService: ClienteServiceService,
    private router: Router
  ) {
    this.form = this.fb.group({
      idProducto: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      idCliente: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      id: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      cantidad: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    })
   }

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: (products) => {
        this.products = products
      }
    })

    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients
      }
    })

  }
  get getIdOrden() {return this.form.get('id')}
  get getIdProducto() {return this.form.get('idProducto')}
  get getIdCliente() {return this.form.get('idCliente')}
  get getCantidad() {return this.form.get('cantidad')}

  saveOrder() {
    if(!this.form.valid) {
      this.show_error_message = true;
      return
    }
    const data = {
      ...this.form.value,
      fecha:new Date()
    };
    this.postOrder(data);
  }


  postOrder(data:Order) {
    this.service.saveOrder(data).subscribe({
      next: (product:Order) => {
        this.service.setMessage('Se ingreso correctamente');
        setTimeout(() => {
            this.service.clearMessage()
        }, 3000);
        this.router.navigate(['mi-tienda/orden'])
      }
    })
  }

}
