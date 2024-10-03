import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-findempresa',
  templateUrl: './findempresa.component.html',
  providers: [DialogService]
})
export class FindempresaComponent {

  constructor(private empresaService: EmpresasService) { }
  @ViewChild('dialogEmpresa') dialogEmpresa: DynamicDialogRef;

  @Output()
  seleccionarEmpresa = new EventEmitter();

  mostrarEmpresas: boolean = false;
  dataEmpresa: any;
  visibleTable: boolean = false;
  empresaSeleccionada: any;

  findEmpresa() {
    let qrDataEmpresa = {
      "OpcionData": "all"
    }

    let getEmpresarequest: any = {
      User: '',
      IP: '',
      Data: qrDataEmpresa
    }

    this.empresaService.getEmpresa(getEmpresarequest).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.cargarEmpresas(res);
          this.visibleTable = true;
        },
          2000)
      },
      error: (err) => {
      }
    });
  }

  cargarEmpresas(res: any) {
    this.dataEmpresa = res.data;
  }

  seleccionarCerrar() {
    this.seleccionarEmpresa.emit();
  }

}
