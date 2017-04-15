import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Lights } from '../models/lights';

@Injectable()
export class LightsService {
  lightsUrl = 'http://10.0.0.231/api/wFsNwvyxiU3bCg9KunbgjRFv4bLIw1AVSHEkO7tA/lights/';

  constructor(private http: Http) { }

  // getLights(): Observable<Lights[]> {
  // return this.http.get(this.lightsUrl);
  // }

  toggleOn(id: number): Observable<any> {
    return this.http.put(this.lightsUrl + id + '/state', { 'on': true });
  }

  toggleOff(id: number): Observable<any> {
    return this.http.put(this.lightsUrl + id + '/state', { 'on': false });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
