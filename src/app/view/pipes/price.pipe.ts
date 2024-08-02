import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // {{ someValue | pricePipe }}
    //


    return null;
  }

}
