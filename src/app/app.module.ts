import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    AirQualityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
