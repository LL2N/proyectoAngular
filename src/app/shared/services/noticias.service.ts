import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class NoticiasService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getNoticias(): Observable<any> {
    return this.http.get(`${this.url}/nyc/noticias.json`);
  }

  public getNoticiasById(id: any): Observable<any> {
    return this.http.get(`${this.url}/nyc/noticias/${id}.json`);
  }

  public addNoticia(product: any): Observable<any> {
    return this.http.post(`${this.url}/nyc/noticias.json`, product);
  }

  public deleteNoticia(id: any): Observable<any> {
    return this.http.delete(`${this.url}/nyc/noticias/${id}.json`);
  }

  public updateNoticia(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/nyc/noticias/${id}.json`, product);
  }

}
