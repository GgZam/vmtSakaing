import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-findcategoria',
  templateUrl: './findcategoria.component.html',
  providers: [DialogService, MessageService]
})
export class FindcategoriaComponent {

  constructor(private dialogService: DialogService, private messageService: MessageService) { }

  categoriaService = inject(CategoriaService);

  @ViewChild('dialogoCategoria') dialogoCategoria: DynamicDialogRef;

  @Output()
  seleccionarCategoria = new EventEmitter();

  mostrarCategorias: boolean = false;

  dataCategoria: any;

  categoriaSeleccionada: any;

  visibleTable: boolean = false;

  findCategorias() {
    let datarq = {
      "OpcionData": "all"
    }

    let getCategoriarequest: any = {
      User: '',
      IP: '',
      Data: datarq
    }

    this.categoriaService.getCategoria(getCategoriarequest).subscribe({
      next: (resCategoria) => {
        setTimeout(() => {
          this.cargarCategoria(resCategoria);
          this.visibleTable = true;
        },
          2000)
      },
      error: (err) => {
      }
    });
  }

  cargarCategoria(resp: any) {
    this.dataCategoria = resp.data;
  }

  seleccionarCerrar() {
    this.seleccionarCategoria.emit();
  }
}
