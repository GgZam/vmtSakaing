import { Component, ViewChild } from '@angular/core';
import { DialogingresostockComponent } from './dialogingresostock/dialogingresostock.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: ``
})
export class StockComponent {

  @ViewChild(DialogingresostockComponent) dialogStock: DialogingresostockComponent;

  loading: boolean = false;

  filtro: string = '';

  productos: any = [
    {
      "stockId": 1,
      "empresaId": 1,
      "empresaDescripcion": "EmpresaPrueba",
      "sucursalId": 1,
      "sucursalDescripcion": "ProveedorPrueba",
      "bodegaId": 1,
      "bodegaDescripcion": "BodegaPrueba",
      "prodId": 1,
      "prodDescripcion": "telefono",
      "cantidadStock": 700,
      "estadoId": 1,
      "estadoDescripcion": "activo",
      "fechaHoraReg": "2024-07-19T08:23:00",
      "usuIdReg": 1,
      "usuRegName": "administrador",
      "datos": {
        "accion": "aumentar",
        "cantidad": 100
      }
    }
  ]

  ingresarStock() {

  }

  openDialogStock(producto: any) {
    this.dialogStock.visible = true;
    this.dialogStock.producto = producto;
  }

}
