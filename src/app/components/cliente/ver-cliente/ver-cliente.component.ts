import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClienteServiceService } from '../cliente-service.service';
import { Client } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {
  componentDestroyed$: Subject<boolean> = new Subject()
  public data:Client = {
    apellidos:'',
    id:'',
    nombre:''
  }


  constructor(
    private clientService:ClienteServiceService
  ) { }

  ngOnInit(): void {
    this.clientService.client$.pipe(takeUntil(this.componentDestroyed$)).subscribe({
      next: (clientData) => {
        console.log('Cliente >>>>>> ',clientData);
        if(clientData.id) {
          localStorage.setItem('cliente',JSON.stringify(clientData))
        }
        this.data = JSON.parse(localStorage.getItem('cliente') || JSON.stringify(this.data)) ;
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
