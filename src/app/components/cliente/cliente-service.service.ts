import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  public message$: ReplaySubject<string> = new ReplaySubject<string>();
  public client$: BehaviorSubject<Client> = new BehaviorSubject<Client>({
    apellidos:'',
    id:'',
    nombre:''
  });

  constructor(
    private http:HttpClient
  ) { }

    getClients(): Observable<Client[]> {

      return this.http.get<Client[]>(`${environment.BASE_URL}/clientes`);
    }

    saveClient(data:Client):Observable<Client> {
      return this.http.post<Client>(`${environment.BASE_URL}/clientes`,data);
    }

    setMessage(message:string) {
      this.message$.next(message);
    }

    clearMessage(){
      this.message$.next('')
    }

}
