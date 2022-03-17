import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../producto-tabla/interfaces/Product.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  public form: FormGroup;
  public show_error_message:boolean = false;
  public precio:string = '';

  constructor(
    private fb:FormBuilder,
    private service: ProductoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      nombre: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      descripcion: new FormControl('',[Validators.required]),
      precio: new FormControl('$',[Validators.required, Validators.minLength(2)])
    })

   }

  ngOnInit(): void {

  }
  get getId() {return this.form.get('id')}
  get getName() {return this.form.get('nombre')}
  get getDesc() {return this.form.get('descripcion')}
  get getPrecio() {return this.form.get('precio')}

  saveProduct() {
    console.log(this.form);

    if(!this.form.valid) {
      this.show_error_message = true;
      return
    }

    const data = this.form.value;
    console.log(data);

    this.postProduct(data);

  }

  formatCurrency(ev:any) {
    const {value} = ev.target
    if(value.charAt(0) != '$'){
      this.getPrecio?.setValue('$'+value)
    }
    let numberWithoutColon:string = value.replaceAll(',','');
     numberWithoutColon = numberWithoutColon.replace(/[a-z]/gi,'')
    if(numberWithoutColon.charAt(numberWithoutColon.length-1) != '.'){
      const numberPart:number = Number(numberWithoutColon.substring(1,value.length));
      const newValue:string = numberPart.toLocaleString('en-US', { currency:'USD'})
      if(!isNaN(numberPart))this.getPrecio?.setValue('$'+newValue)
    } else {
      let after_ = numberWithoutColon.substring(numberWithoutColon.indexOf('.') +1)
      if(after_ == '.') {

        let a = value.replaceAll(after_,'')
        this.getPrecio?.setValue(a);

      }
    }
  }

  postProduct(data:Product) {
    this.service.saveProduct(data).subscribe({
      next: (product:Product) => {
        this.service.setMessage('Se ingreso correctamente');
        setTimeout(() => {
            this.service.clearMessage()
        }, 3000);
        this.router.navigate(['mi-tienda/producto'])
      }
    })
  }


}
