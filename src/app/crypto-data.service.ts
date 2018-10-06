import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import * as Constants from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  result: any;

  constructor(private _http: Http) { }

  getPrices() {
    return this._http.get(Constants.API_BASE_URL)
      .pipe(map(result => this.result = result.json()));
  }

}
