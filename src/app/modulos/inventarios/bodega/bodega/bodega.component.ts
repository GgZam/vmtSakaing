import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogbodegaComponent } from './dialogbodega/dialogbodega.component';
import { BodegaService } from 'src/app/services/bodega.service';

@Component({
  selector: 'app-componente',
  templateUrl: './bodega.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class BodegaComponent implements OnInit, AfterViewInit {

  constructor(public layoutService: LayoutService, private messageService: MessageService) { }
  loading: boolean = false;

  bodegaService = inject(BodegaService);

  ngAfterViewInit(): void {
    let datarqBodega = {
      "OpcionData": "all"
    }

    let getBodegarequest: any = {
      User: '',
      IP: '',
      Data: JSON.stringify(datarqBodega)
    }

    this.bodegaService.getBodega(getBodegarequest).subscribe({
      next: (resBodega) => {
        this.cargarBodega(resBodega);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  activityValues: number[] = [0, 100];

  @ViewChild('dialogoEmpresa') dialogoBodega: DialogbodegaComponent;

  bodegas: any[] = [

  ];

  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  ngOnInit(): void {



  }


  dialogNuevaBodega() {
    this.dialogoBodega.visibleClient = true;
  }

  cargarBodega(resp: any) {
    this.bodegas = resp.data;
  }
}