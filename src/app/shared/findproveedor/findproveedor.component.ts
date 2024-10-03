import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-findproveedor',
  templateUrl: './findproveedor.component.html',
  providers: [DialogService]
})
export class FindproveedorComponent {

  constructor(private proveedoService: ProveedorService) { }
  @ViewChild('dialogProveedor') dialogProveedor: DynamicDialogRef;

  @Output()
  seleccionarProveedor = new EventEmitter();

  mostrarProveedor: boolean = false;
  dataProveedor: any;
  visibleTable: boolean = false;
  proveedorSeleccionada: any;

  findProveedor() {
    let qrDataProveedor = {
      "OpcionData": "all"
    }

    let getProveedorrequest: any = {
      User: '',
      IP: '',
      Data: qrDataProveedor
    }

    this.proveedoService.getProveedores(getProveedorrequest).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.cargarProveedor(res);
          this.visibleTable = true;
        },
          2000)
      },
      error: (err) => {
      }
    });
  }

  cargarProveedor(res: any) {
    this.dataProveedor = res.data;
  }

  seleccionarCerrar() {
    this.seleccionarProveedor.emit();
  }
}
