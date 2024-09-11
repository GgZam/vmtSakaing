import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogproducto.component.html',
  styles: ``
})
export class DialogproductoComponent {

  nombre: string;
  precio: number;
  categoria: string;
  empresa: string;
  proveedor: string;
  status: string;

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

  guardar() {
    console.log(this.nombre);
  }

}
