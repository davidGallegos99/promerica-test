import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../interfaces/Order.interface';
import { OrdenService } from '../services/orden.service';

@Component({
  selector: 'app-orden-tabla',
  templateUrl: './orden-tabla.component.html',
  styleUrls: ['./orden-tabla.component.css']
})
export class OrdenTablaComponent implements OnInit {

  @Input() orders: Order[] = [];
  constructor(

  ) { }

  ngOnInit(): void {
  }


}
