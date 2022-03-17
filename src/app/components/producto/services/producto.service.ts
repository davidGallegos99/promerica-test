import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../producto-tabla/interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public message$: ReplaySubject<string> = new ReplaySubject<string>();
  public product$: BehaviorSubject<Product> = new BehaviorSubject<Product>({
    id:"",
    nombre: "",
    descripcion: "",
    precio: ""
  });


  constructor(
    private http:HttpClient
  ) { }

    getProduct(): Observable<Product[]> {

      return this.http.get<Product[]>(`${environment.BASE_URL}/productos`);
    }

    saveProduct(data:Product):Observable<Product> {
      return this.http.post<Product>(`${environment.BASE_URL}/productos`,data);
    }

    setMessage(message:string) {
      this.message$.next(message);
    }

    clearMessage(){
      this.message$.next('')
    }
}
