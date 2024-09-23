import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DialogclienteComponent } from './dialogcliente/dialogcliente.component';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ComponenteComponent implements OnInit, AfterViewInit {

  constructor(public layoutService: LayoutService, private messageService: MessageService) { }
  loading: boolean = false;

  clienteService = inject(ClientesService);

  ngAfterViewInit(): void {
    let datarqCliente = {
      "OpcionData": "all"
    }

    let getClienterequest: any = {
      User: '',
      IP: '',
      Data: JSON.stringify(datarqCliente)
    }

    this.clienteService.getClientes(getClienterequest).subscribe({
      next: (resCliente) => {
        this.cargarCliente(resCliente);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });

  }

  activityValues: number[] = [0, 100];

  @ViewChild('dialogoCliente') dialogoCliente: DialogclienteComponent;

  clientes: any[] = [];

  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  ngOnInit(): void {

  }


  dialogNuevoCliente() {
    this.dialogoCliente.visibleClient = true;
  }
  
  onClienteGuardado(nuevoCliente: any) {
    this.clientes.push({
      id: Math.max(...this.clientes.map(c => c.id), 0) + 1,
      nombre: `${nuevoCliente.ClienteNombre1} ${nuevoCliente.ClienteNombre2} ${nuevoCliente.ClienteApellido1} ${nuevoCliente.ClienteApellido2}`.trim(),
      identificacion: nuevoCliente.ClienteRuc,
      fechaIngreso: new Date(nuevoCliente.FechaHoraReg),
      estatus: nuevoCliente.Estado === 1 ? { label: 'Activo', value: 'activo' } : { label: 'Inactivo', value: 'inactivo' }
    });
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Cliente guardado correctamente.' });
  }
  cargarCliente(resp: any) {
    this.clientes = resp.data;
  }
}
