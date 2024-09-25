import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor( private httpClient: HttpClient) { }

  urlBase: string = environment.vmtDevApiUrl;
  uriEmpresa: string = environment.pathGetEmpresa;
  uriProveedor: string = environment.pathGetProveedor;


  findCatalogoEmpresa( catalogoEmpresaRq: any ) : Observable<any> {
    let urlCatalogoEmpresa = this.urlBase + this.uriEmpresa;
    return this.httpClient.get( urlCatalogoEmpresa,  catalogoEmpresaRq );
  }

  findCatalogoProveedor( catalogoProveedorRq: any ) : Observable<any>  {
    let urlCatalogoProveedor = this.urlBase + this.uriProveedor;
    return this.httpClient.get( urlCatalogoProveedor, catalogoProveedorRq );
  }
}
