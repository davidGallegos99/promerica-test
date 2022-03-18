import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/Order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  public message$: ReplaySubject<string> = new ReplaySubject<string>();
  public product$: BehaviorSubject<Order> = new BehaviorSubject<Order>({
    idProducto: "",
    idCliente: "",
    id: "",
    cantidad: "",
    fecha: ""
  });


  constructor(
    private http:HttpClient
  ) { }

    getOrder(): Observable<Order[]> {

      return this.http.get<Order[]>(`${environment.BASE_URL}/ordenes`);
    }

    saveOrder(data:Order):Observable<Order> {
      return this.http.post<Order>(`${environment.BASE_URL}/ordenes`,data);
    }

    setMessage(message:string) {
      this.message$.next(message);
    }

    clearMessage(){
      this.message$.next('')
    }
}
