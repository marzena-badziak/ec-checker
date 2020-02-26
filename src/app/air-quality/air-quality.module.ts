import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AirQualityComponent} from './air-quality.component';

import { SharedModule } from '.././_shared/shared.module';
import { MaterialModule } from '../material';

@NgModule({
    declarations: [ AirQualityComponent ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule
    ],
    exports: [ AirQualityComponent ]
  })
  export class AirQualityModule { }