import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class TarifasService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getTarifas(): Observable<any> {
    return this.http.get(`${this.url}/rutas/tarifas.json`);
  }

  public getTarifaById(id: any): Observable<any> {
    return this.http.get(`${this.url}/rutas/tarifas/${id}.json`);
  }

  public addTarifa(product: any): Observable<any> {
    return this.http.post(`${this.url}/rutas/tarifas.json`, product);
  }

  public deleteTarifa(id: any): Observable<any> {
    return this.http.delete(`${this.url}/rutas/tarifas/${id}.json`);
  }

  public updateTarifa(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/rutas/tarifas/${id}.json`, product);
  }

}
