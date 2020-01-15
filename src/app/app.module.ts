import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { ApiService } from '../config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
