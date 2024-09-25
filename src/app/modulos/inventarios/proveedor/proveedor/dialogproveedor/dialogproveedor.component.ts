import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-dialogproveedor',
  templateUrl: './dialogproveedor.component.html',
  styles: ``
})
export class DialogproveedorComponent {

  constructor(private changeDetector: ChangeDetectorRef) { }

  @ViewChild(Dialog) dialogoGenerico: Dialog;

  @Input() registro: any;
  @Output() datosProveedor = new EventEmitter<any>();

  esNuevo: boolean;
  dataGuardar: any;

  nombre: string;
  ruc: string;
  razon: string;
  direccion: string;
  telefono: string;
  ciudad: any;
  estado: any;

  visibleClient: boolean = false;

  ciudades = [
    { label: 'Ciudad 1', value: 1 },
    { label: 'Ciudad 2', value: 2 }
  ];

  statuses = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' }
  ];

  guardar() {
    this.dataGuardar = {
      nombre: this.nombre,
      ruc: this.ruc,
      razon: this.razon,
      direccion: this.direccion,
      telefono: this.telefono,
      ciudad: this.ciudad,
      estado: this.estado.value
    };
    this.datosProveedor.emit(this.dataGuardar);
  }

  abrir() {
    this.nombre = '';
    this.ruc = '';
    this.razon = '';
    this.direccion = '';
    this.telefono = '';
    this.ciudad = null;
    this.estado = null;
  }
}
