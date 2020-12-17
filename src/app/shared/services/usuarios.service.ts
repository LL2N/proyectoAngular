import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class UsuariosService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUsuarios(): Observable<any> {
    return this.http.get(`${this.url}/usuarios.json`);
  }

  public getUsuarioById(id: any): Observable<any> {
    return this.http.get(`${this.url}/usuarios/${id}.json`);
  }

  public addUsuario(product: any): Observable<any> {
    return this.http.post(`${this.url}/usuarios.json`, product);
  }

  public deleteUsuario(id: any): Observable<any> {
    return this.http.delete(`${this.url}/usuarios/${id}.json`);
  }

  public updateUsuario(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/usuarios/${id}.json`, product);
  }

}