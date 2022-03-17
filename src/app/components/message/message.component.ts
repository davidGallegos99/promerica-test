import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() type:string = '';
  @Input() message:string = ''

  constructor() { }

  ngOnInit(): void {
    if(this.type == 'error') this.type = 'alert-danger';
    if(this.type == 'info') this.type = 'alert-info';
    if(this.type == 'success') this.type = 'alert-success';
  }

}
