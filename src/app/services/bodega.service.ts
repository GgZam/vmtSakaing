import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetBodega: string = environment.pathGetBodega;

  constructor(private httpClient: HttpClient) { }

  getBodega(rqGetBodega: any): Observable<any> {
    let urlGetBodega = this.urlBase + this.uriGetBodega;
    return this.httpClient.get(urlGetBodega, rqGetBodega);
  }


}
