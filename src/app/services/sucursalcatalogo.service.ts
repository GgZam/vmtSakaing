import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SucursalcatalogoService {

  constructor(private httpClient: HttpClient) { }

  urlBase: string = environment.vmtDevApiUrl;
  urlSucursal: string = environment.pathGetSucursal;


  findSucursales(rqGetSucursal: any): Observable<any> {
    let urlGetSucursal = this.urlBase + this.urlSucursal;
    return this.httpClient.get(urlGetSucursal, rqGetSucursal);
  }
}
