import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetProducto: string = environment.pathGetProductos;

  constructor( private httpClient: HttpClient ) {}

  getProductos(rqGetProductos: any) : Observable<any> {
    let urlGetProducto = this.urlBase + this.uriGetProducto;
    return this.httpClient.post( urlGetProducto, rqGetProductos );
  }
}
