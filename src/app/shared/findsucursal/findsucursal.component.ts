import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CatalogoBase } from 'src/app/datasource/interface/interface.base';
import { SucursalcatalogoService } from 'src/app/services/sucursalcatalogo.service';

@Component({
  selector: 'app-findsucursal',
  templateUrl: './findsucursal.component.html',
  providers: [DialogService]
})
export class FindsucursalComponent {

  constructor(private sucursalService: SucursalcatalogoService, private dialogService: DialogService) { }
  @ViewChild('dialogSucursal') dialogSucursal: DynamicDialogRef;

  @Output()
  seleccionarSucursal = new EventEmitter();

  responseSimulate: any;

  mostrarFindSucursales: boolean = false;

  visibleTable: boolean = false;

  sucursalSeleccionada: any;

  dataSucursal: any;

  sucursalDefault: CatalogoBase = {
    id: '',
    valor: ''
  }

  findSucursal() {
    let qrDataSucursal = {
      "OpcionData": "all"
    }

    let getCategoriarequest: any = {
      User: '',
      IP: '',
      Data: qrDataSucursal
    }

    this.sucursalService.findSucursales(getCategoriarequest).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.cargarSucursales(res);
          this.visibleTable = true;
        },
          2000)
      },
      error: (err) => {
      }
    });
  }

  cargarSucursales(resp: any) {
    this.dataSucursal = resp.data;
  }

  seleccionarCerrar() {
    this.seleccionarSucursal.emit();
  }

}
