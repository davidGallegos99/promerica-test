import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'noValue'
})
export class NoValuesPipe implements PipeTransform {
  transform(value: string|number):any {

    if(!value) {
      return 'Valor cambiado con pipe'
    }
    return value;
  }
}
