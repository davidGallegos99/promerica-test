import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from './cliente-service.service';
import { Client } from './interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clients: Client[] = [];
  public message:string = ''

  constructor(
    public clienteService: ClienteServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClients()
    this.clienteService.message$.subscribe({
      next:(message) => {
        this.message = message;
        console.log(this.message);

      }
    })
  }

  getClients() {
    this.clienteService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients
      }
    })
  }



  redirectToAdd(){
    this.router.navigate(['mi-tienda/cliente/agregar'])
  }

}
