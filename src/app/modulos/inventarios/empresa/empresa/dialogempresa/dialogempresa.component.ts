import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogempresa.component.html',
  styles: ``
})
export class DialogempresaComponent {

  visibleClient: boolean = false;

  statuses: any [] = [
    {
      label: 'Activo',
      value: 'activo'
    },
    {
      label: 'Inactivo',
      value: 'inactivo'
    },
  ]

}
