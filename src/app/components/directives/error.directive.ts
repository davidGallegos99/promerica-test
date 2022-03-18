import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ErrorFeedback]'
})
export class ErrorDirective  {

  constructor(
    private control: NgControl,
    private elementDom: ElementRef
  ) {}


  @HostListener('input',['$event'])
  onChange(ev:any){
    const abstractControl = this.control.control;

    if(!abstractControl?.valid) {
      this.elementDom.nativeElement.style.border = '2px solid red'
    }else {
      this.elementDom.nativeElement.style.border = '2px solid green'
    }

  }




}
