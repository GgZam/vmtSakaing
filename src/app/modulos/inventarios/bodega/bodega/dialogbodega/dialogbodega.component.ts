import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { FindsucursalComponent } from 'src/app/shared/findsucursal/findsucursal.component';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogbodega.component.html',
  styles: ``
})
export class DialogbodegaComponent {

  constructor(private changeDetector: ChangeDetectorRef) { }

  @ViewChild(Dialog) dialogoGenerico: Dialog;

  @ViewChild(FindsucursalComponent) bodegaComponente: FindsucursalComponent;

  idBodega: any = null;
  nombreb: string;
  direccionb: string;
  telefono: number;
  sucursal: any;
  estado: any;


  visibleClient: boolean = false;

  statuses: any[] = [
    {
      label: 'Activo',
      value: 'activo'
    },
    {
      label: 'Inactivo',
      value: 'inactivo'
    },
  ]

  cerrarModal() {
    let btnCerrar = document.getElementById('btnCerrarModal');
    if (btnCerrar) {
      btnCerrar?.click();
    }
  }

  mostrarSucursal() {
    this.bodegaComponente.mostrarFindSucursales = true;
  }

  fijarSucursal() {
    this.sucursal = this.bodegaComponente.sucursalSeleccionada.sucursalNombre;
    this.bodegaComponente.dialogSucursal.close(this.sucursal);
    this.changeDetector.detach();
  }
}
