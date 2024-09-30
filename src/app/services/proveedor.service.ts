import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlBase: string = environment.vmtDevApiUrl;
  private uriGetProveedores: string = environment.pathGetProveedores; // Asegúrate de que esta ruta es correcta
  private uriPostProveedores: string = '/Proveedor/PostProveedor'; // Asegúrate de que esta ruta es correcta

  constructor(private httpClient: HttpClient) { }

  // Consulta: Obtener todos los proveedores
  getProveedores(params: any): Observable<any> {
    let urlGetProveedor = this.urlBase + this.uriGetProveedores;
    return this.httpClient.post(urlGetProveedor, params);
  }

  // Mantenimiento: Guardar o actualizar proveedores
  guardarProveedor(rqMantenimiento: any): Observable<any> {
    let urlPostProveedor = this.urlBase + this.uriPostProveedores;
    return this.httpClient.post(urlPostProveedor, rqMantenimiento);
  }
}
