import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogComponent } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialogingresostock',
  templateUrl: './dialogingresostock.component.html',
  styles: ``,
  providers: [DialogService]
})
export class DialogingresostockComponent {


  @ViewChild('dialogStock') dialogStock: DynamicDialogComponent;
  constructor(private dynamicDialog: DialogService) { }

  @Output()
  guardarStock = new EventEmitter<any>();
  visible: boolean = false;
  producto: any;

  guardarStockDialog() {

  }


}
