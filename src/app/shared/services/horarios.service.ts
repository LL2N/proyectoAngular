import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class HorariosService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getHorarios(): Observable<any> {
    return this.http.get(`${this.url}/rutas/horarios.json`);
  }

  public getHorarioById(id: any): Observable<any> {
    return this.http.get(`${this.url}/rutas/horarios/${id}.json`);
  }

  public addHorario(product: any): Observable<any> {
    return this.http.post(`${this.url}/rutas/horarios.json`, product);
  }

  public deleteHorario(id: any): Observable<any> {
    return this.http.delete(`${this.url}/rutas/horarios/${id}.json`);
  }

  public updateHorario(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/rutas/horarios/${id}.json`, product);
  }
}
