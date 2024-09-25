import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetClientes: string = environment.pathGetClientes;

  constructor(private httpClient: HttpClient) { }

  getClientes(rqGetClientes: any): Observable<any> {
    let urlGetClientes = this.urlBase + this.uriGetClientes;
    return this.httpClient.get(urlGetClientes, rqGetClientes);
  }
}
