import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../cliente-service.service';
import { Client } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  public form: FormGroup;
  public show_error_message:boolean = false;

  constructor(
    private fb:FormBuilder,
    private service: ClienteServiceService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      nombre: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      apellidos: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')])
    })

   }

  ngOnInit(): void {

  }
  get getId() {return this.form.get('id')}
  get getName() {return this.form.get('nombre')}
  get getApellidos() {return this.form.get('apellidos')}

  saveClient() {
    if(!this.form.valid) {
      this.show_error_message = true;
      return
    }

    const data = this.form.value;
    console.log(data);

    this.postClient(data);

  }

  postClient(data:Client) {
    this.service.saveClient(data).subscribe({
      next: (client:Client) => {
        this.service.setMessage('Se ingreso correctamente');
        setTimeout(() => {
            this.service.clearMessage()
        }, 3000);
        this.router.navigate(['mi-tienda/cliente'])
      }
    })
  }


}
