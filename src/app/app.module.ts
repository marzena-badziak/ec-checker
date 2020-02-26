import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchModule } from './search/search.module';
import { MapModule } from './map/map.module';
import { WeatherModule } from './weather/weather.module';
import { AirQualityModule } from './air-quality/air-quality.module';
import { CoreModule } from './_core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './_shared/shared.module';
import { MaterialModule } from './material';
import { MapComponent } from './map/map.component';

import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [
    AppComponent
    // SearchComponent,
    // WeatherComponent,
    // AirQualityComponent,
    // MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    GoogleMapsModule,
    SearchModule,
    MapModule,
    WeatherModule,
    AirQualityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
