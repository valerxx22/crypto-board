import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  result: any;

  constructor(private _http: Http) { }

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .pipe(map(result => this.result = result.json()));
  }

}
