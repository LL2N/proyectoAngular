import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ComunicadosService {

    url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getComunicados(): Observable<any> {
    return this.http.get(`${this.url}/nyc/comunicados.json`);
  }

  public getComunicadoById(id: any): Observable<any> {
    return this.http.get(`${this.url}/nyc/comunicados/${id}.json`);
  }

  public addComunicado(product: any): Observable<any> {
    return this.http.post(`${this.url}/nyc/comunicados.json`, product);
  }

  public deleteComunicado(id: any): Observable<any> {
    return this.http.delete(`${this.url}/nyc/comunicados/${id}.json`);
  }

  public updateComunicado(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/nyc/comunicados/${id}.json`, product);
  }


}
