import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../crypto-data.service';

import * as Constants from '../../utils/constants';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  coinIcons = Constants.COIN_ICONS;

  constructor(private _data: CryptoDataService) {
    
  }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(response => {
        this.cryptos = response;
        console.log(response)
    });
  }

}
