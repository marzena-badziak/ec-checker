import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'; 
import { map, catchError } from 'rxjs/operators';


@Injectable() export class DataService {

    

    constructor(private http: HttpClient) {}

    


}