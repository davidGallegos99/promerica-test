import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../cliente-service.service';
import { Client } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente-tabla',
  templateUrl: './cliente-tabla.component.html',
  styleUrls: ['./cliente-tabla.component.css']
})
export class ClienteTablaComponent implements OnInit {

  @Input() clients: Client[] = [];
  constructor(
    private router: Router,
    private serviceClient : ClienteServiceService
  ) { }

  ngOnInit(): void {
  }

  showClient(client:Client){
    this.router.navigate(['mi-tienda/cliente', client.id])
    this.serviceClient.client$.next(client);
  }

}
