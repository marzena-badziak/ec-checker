import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SearchComponent} from './search.component';
import { SharedModule } from '.././_shared/shared.module';
import { MaterialModule } from '../material';

@NgModule({
    declarations: [ SearchComponent ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule
    ],
    exports: [ SearchComponent ]
  })
  export class SearchModule { }