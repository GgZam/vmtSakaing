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
     private messageService: MessageService) {}
  loading: boolean = true;
  
  productoService = inject(ProductosService);

  ngAfterViewInit(): void {
    let datarq = {
      "OpcionData":"all"
    }


    let getProductrequest: any = {
      Usuario:'user',
      Ip: '0.0.0.0',
      Modulo: 1,
      Operacion: "GET",
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

    /*
    
    {
    "code": "200",
    "data": [
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
    ],
    "message": "Ok"
}
    
    
    setTimeout( () => {
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
    //}, 4000)*/
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



  dialogNuevoCliente(){
    this.dialogoCliente.visibleClient = true;
  }

  cargarProductos(resp : any) {
    this.productos = resp.data;
  }
}
