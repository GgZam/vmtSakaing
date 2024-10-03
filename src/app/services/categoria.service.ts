import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetCategoria: string = environment.pathGetCategoria;

  constructor(private httpClient: HttpClient) { }

  getCategoria(rqGetCategoria: any): Observable<any> {
    let urlGetCategoria = this.urlBase + this.uriGetCategoria;
    return this.httpClient.post(urlGetCategoria, rqGetCategoria);
  }
}
