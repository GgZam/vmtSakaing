import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogempresaComponent } from './dialogempresa/dialogempresa.component';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-componente',
  templateUrl: './empresa.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class EmpresaComponent implements OnInit, AfterViewInit {

  constructor(public layoutService: LayoutService, private messageService: MessageService) { }
  loading: boolean = false;

  empresaService = inject(EmpresasService);

  ngAfterViewInit(): void {
    let datarqEmpresa = {
      "OpcionData": "all"
    }

    let getEmpresarequest: any = {
      User: '',
      IP: '',
      Data: JSON.stringify(datarqEmpresa)
    }

    this.empresaService.getEmpresa(getEmpresarequest).subscribe({
      next: (resEmpresa) => {
        this.cargarEmpresa(resEmpresa);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  activityValues: number[] = [0, 100];

  @ViewChild('dialogoEmpresa') dialogoCliente: DialogempresaComponent;

  empresas: any[] = [

  ];

  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  ngOnInit(): void {



  }


  dialogNuevoCliente() {
    this.dialogoCliente.visibleClient = true;
  }

  cargarEmpresa(resp: any) {
    this.empresas = resp.data;
  }
}
