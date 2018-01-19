import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HotelsService {
  constructor(private http:Http) {

  }

  getHotels() {
    return this.http.get('https://almundoapi.azurewebsites.net/hotels').map((res:Response) => res.json());
  }

}
