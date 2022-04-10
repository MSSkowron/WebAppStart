import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  currentCurrency ="euro";
  currencies: {[key:string]:{value:number;symbol:string}}=
  {
    'euro':{value:0.7,symbol:'€'},
    'usd': {value: 1.1,symbol:'$'}
  }
  getValue():number{
    return this.currencies[this.currentCurrency].value;
  }
  getSymbol():string{
    return this.currencies[this.currentCurrency].symbol;
  }
  changeCurrency(currencyName:string){
    this.currentCurrency=currencyName;
  }
  constructor() { }
}
