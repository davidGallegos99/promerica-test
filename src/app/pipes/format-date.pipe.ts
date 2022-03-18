import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  // Pipe para realizar el punto de pipe personalizado
  transform(value: string): string {
    const formatedDate = new Date(value)
    const opciones:any = {year:'numeric', month:'long',day:'2-digit'}
    return formatedDate.toLocaleString('es-ES', opciones)
  }

}
