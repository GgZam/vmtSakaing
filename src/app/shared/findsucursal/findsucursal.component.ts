import { Component, ViewChild } from '@angular/core';
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

  responseSimulate: any;

  mostrarFindSucursales: boolean = true;

  visibleTable: boolean = false;

  sucursalSeleccionada: any;

  listSucursal: CatalogoBase[];

  sucursalDefault: CatalogoBase = {
    id: '',
    valor: ''
  }

  findSucursal() {
    let qrDataSucursal = {
      idSucursal: this.sucursalDefault.id,
      descripcionSucursal: this.sucursalDefault.valor
    }

    this.sucursalService.findSucursales(qrDataSucursal).subscribe({
      next: (resp) => {
        if (resp.codeResp === 'Ok') {
          let lsucursales: any[] = resp.data.sucursal;
          lsucursales.forEach(element => {
            let idSucursal = element.idSucursal;
            let descripcionSucursal = element.sucursalcatalogo;
          });
        }
      }
    })
  }

  seleccionarCerrar() {

  }

}
