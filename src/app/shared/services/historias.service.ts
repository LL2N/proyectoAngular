import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class HistoriasService {

    url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getHistorias(): Observable<any> {
    return this.http.get(`${this.url}/sobrelpb/historia.json`);
  }

  public getHistoriasById(id: any): Observable<any> {
    return this.http.get(`${this.url}/sobrelpb/historia/${id}.json`);
  }

  public addHistoria(product: any): Observable<any> {
    return this.http.post(`${this.url}/sobrelpb/historia.json`, product);
  }

  public deleteHistoria(id: any): Observable<any> {
    return this.http.delete(`${this.url}/sobrelpb/historia/${id}.json`);
  }

  public updateHistoria(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/nyc/sobrelpb/historia/${id}.json`, product);
  }

}
