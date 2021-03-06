import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps';

import {MapComponent} from './map.component';
import { SharedModule } from '.././_shared/shared.module';
import { MaterialModule } from '../material';

@NgModule({
    declarations: [ MapComponent ],
    imports: [
        CommonModule,
        SharedModule,
        GoogleMapsModule,
        MaterialModule
    ],
    exports: [ MapComponent ]
  })
  export class MapModule { }