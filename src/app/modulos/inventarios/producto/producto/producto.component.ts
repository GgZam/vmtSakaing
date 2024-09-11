import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogproductoComponent } from './dialogproducto/dialogproducto.component';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-componente',
  templateUrl: './producto.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ProductoComponent implements OnInit, AfterViewInit {

  constructor(public layoutService: LayoutService,
    private messageService: MessageService) { }
  loading: boolean = true;

  productoService = inject(ProductosService);

  ngAfterViewInit(): void {
    let datarq = {
      "OpcionData": "all"
    }

    let getProductrequest: any = {
      User: '',
      IP: '',
      Data: datarq
    }

    this.productoService.getProductos(getProductrequest).subscribe({
      next: (resProductos) => {
        this.cargarProductos(resProductos);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  activityValues: number[] = [0, 100];

  @ViewChild(DialogproductoComponent) dialogoCliente: DialogproductoComponent;

  productos: any[] = [];

  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  ngOnInit(): void {

  }


  dialogNuevoCliente() {
    this.dialogoCliente.visibleClient = true;
  }

  cargarProductos(resp: any) {
    this.productos = resp.data;
  }
}
