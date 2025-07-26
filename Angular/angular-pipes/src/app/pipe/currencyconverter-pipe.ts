import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter',
})
export class CurrencyconverterPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    console.log(value);
    const [data] = args;

    if (data) {
      return data * value;
    }

    return value * 80;
  }
}
