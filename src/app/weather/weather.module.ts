import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {WeatherComponent} from './weather.component';
import { SharedModule } from '.././_shared/shared.module';
import { MaterialModule } from '../material';

@NgModule({
    declarations: [ WeatherComponent ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule
    ],
    exports: [ WeatherComponent ]
  })
  export class WeatherModule { }