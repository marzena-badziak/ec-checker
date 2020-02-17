import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatGridListModule, 
    MatIconModule,
    MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [ 
        MatButtonModule, 
        MatCheckboxModule, 
        MatGridListModule, 
        MatIconModule, 
        FormsModule,
        MatCardModule ],
    exports: [ 
       MatButtonModule, 
       MatCheckboxModule, 
       MatGridListModule, 
       MatIconModule, 
       FormsModule,
       MatCardModule ]
})

export class MaterialModule {

}

