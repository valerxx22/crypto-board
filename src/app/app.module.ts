import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpModule } from '@angular/http';
import { CryptoDataService } from './crypto-data.service';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CryptoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
