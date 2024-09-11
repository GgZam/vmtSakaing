import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetEmpresa: string = environment.pathGetEmpresa;

  constructor(private httClient: HttpClient) { }

  getEmpresa(rqGetEmpresa: any): Observable<any> {
    let urlGetEmpresa = this.urlBase + this.uriGetEmpresa;
    return this.httClient.post(urlGetEmpresa, rqGetEmpresa);
  }
}
