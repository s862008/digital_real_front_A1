import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
})
export class PricePipe implements PipeTransform {

  transform(value: bigint, ...args: unknown[]): string {
    // {{ someValue | pricePipe }}
    let num = String(value)
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return num;
  }

}
