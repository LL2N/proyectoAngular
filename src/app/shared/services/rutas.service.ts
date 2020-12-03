import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class RutasService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getRutas(): Observable<any> {
    return this.http.get(`${this.url}/rutas/rutas.json`);
  }

  public getRutaById(id: any): Observable<any> {
    return this.http.get(`${this.url}/rutas/rutas/${id}.json`);
  }

  public addRuta(product: any): Observable<any> {
    return this.http.post(`${this.url}/rutas/rutas.json`, product);
  }

  public deleteRuta(id: any): Observable<any> {
    return this.http.delete(`${this.url}/rutas/rutas/${id}.json`);
  }

  public updateRuta(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/rutas/rutas/${id}.json`, product);
  }
}
