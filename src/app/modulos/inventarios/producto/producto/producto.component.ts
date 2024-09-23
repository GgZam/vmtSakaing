import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogproductoComponent } from './dialogproducto/dialogproducto.component';
import { ProductosService } from 'src/app/services/productos.service';
import { AccionApi } from 'src/app/datasource/accionapienum';
import { CategoriaEnum } from 'src/app/datasource/categiriaenum';

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
    this.dialogoCliente.abrir();
    this.dialogoCliente.esNuevo = true;
  }

  cargarProductos(resp: any) {
    this.productos = resp.data;
  }

  guardarProducto(dataProducto: any) {
    this.loading = true;
    let datoMantenimientoProducto = this.defineDataGuardar(dataProducto);

    if (dataProducto.accion == AccionApi.GUARDAR) {

      let mantenimientoProdRq: any = {
        Modulo: 1,
        Operacion: "PUT",
        Data: datoMantenimientoProducto
      }
      /*this.productoService.mantenimientoProductos(mantenimientoProdRq).subscribe({
        next: (resp) => {
          this.productos = [];
          this.consultar();
        },
        error: (error) => {
  
        }
      })*/
    }

    if (dataProducto.accion === AccionApi.ACTUALIZAR) {

    }


    this.messageService.add({ severity: 'success', summary: 'Notificación VMTDev Bootcamp', detail: 'Guardado correctamente' });
    this.loading = false;
  }

  defineDataGuardar(dataProducto: any): any {
    let valorEstatus = dataProducto.estatus;
    let productoObject = {
      "prodDescripcion": dataProducto.nombre,
      "prodUltPrecio": dataProducto.precio,
      "categoriaId": CategoriaEnum.Computacion,
      "categoriaDesripcion": dataProducto.categoria,
      "empresaId": 1,
      "empresaDescripcion": dataProducto.empresa,
      "proveedorId": 1,
      "proveedorDescripcion": dataProducto.proveedor,
      "estadoId": valorEstatus == 'activo' ? 1 : 0,
      "estadoDescripcion": dataProducto.estatus,
      "usuIdReg": 1,
      "usuRegName": localStorage.getItem('userLogin')
    }
    return productoObject;
  }

  consultar() {
    let datarq = {
      "OpcionData": "all"
    }


    let getProductrequest: any = {
      Usuario: 'user',
      Ip: '0.0.0.0',
      Modulo: 1,
      Operacion: "GET",
      Data: datarq
    }
  }

  cargaDatosLocal() {
    setTimeout(() => {
      this.productos = [
        {
          "prodId": 1,
          "prodDescripcion": "telefono",
          "prodUltPrecio": 500.00,
          "categoriaId": 1,
          "categoriaDesripcion": "computador",
          "empresaId": 1,
          "empresaDescripcion": "EmpresaPrueba",
          "proveedorId": 1,
          "proveedorDescripcion": "rucPrueba",
          "estadoId": 1,
          "estadoDescripcion": "activo",
          "fechaHoraReg": "2024-07-19T08:23:00",
          "usuIdReg": 1,
          "usuRegName": "administrador"
        },
        {
          "prodId": 2,
          "prodDescripcion": "telefono",
          "prodUltPrecio": 500.00,
          "categoriaId": 1,
          "categoriaDesripcion": "computador",
          "empresaId": 1,
          "empresaDescripcion": "EmpresaPrueba",
          "proveedorId": 1,
          "proveedorDescripcion": "rucPrueba",
          "estadoId": 1,
          "estadoDescripcion": "activo",
          "fechaHoraReg": "2024-07-20T17:33:00.477",
          "usuIdReg": 1,
          "usuRegName": "administrador"
        }
      ];
      this.loading = false;
    }, 1000)
  }

  editarProducto(registro: any) {
    this.dialogoCliente.visibleClient = true;
    this.dialogoCliente.nombre = registro.prodDescripcion;
  }
}
