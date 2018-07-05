import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name : 'countrycode'
})
export class CountryCodePipe implements PipeTransform{
    transform(value : any, arg :any = '91'){
        return "+" + arg + " " + value;
    }
}