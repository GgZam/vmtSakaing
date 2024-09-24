import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClientesService } from 'src/app/services/clientes.service';
import { DialogclienteComponent } from './dialogcliente/dialogcliente.component';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService]
})
export class ComponenteComponent implements OnInit, AfterViewInit {

  loading: boolean = false;
  clientes: any[] = [];

  // Correcto uso de ViewChild con el componente Dialogcliente
  @ViewChild(DialogclienteComponent) dialogoCliente!: DialogclienteComponent;

  clienteService = inject(ClientesService);

  statuses = [
    { label: 'Inactivo', value: 'unqualified' },
    { label: 'Activo', value: 'qualified' }
  ];

  constructor(public layoutService: LayoutService, private messageService: MessageService) {}

  ngAfterViewInit(): void {
    let datarqCliente = {
      OpcionData: "all"
    };

    let getClienterequest: any = {
      User: '',
      IP: '',
      Data: JSON.stringify(datarqCliente)
    };

    this.clienteService.getClientes(getClienterequest).subscribe({
      next: (resCliente) => {
        this.cargarCliente(resCliente);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {}

  // Método para abrir el diálogo
  dialogNuevoCliente() {
    if (this.dialogoCliente) {
      this.dialogoCliente.visibleClient = true; // Abrir el diálogo
    }
  }

  onClienteGuardado(nuevoCliente: any) {
    const estatus = nuevoCliente.Estado === 1
      ? { label: 'Activo', value: 'activo' }
      : { label: 'Inactivo', value: 'inactivo' };

    this.clientes.push({
      id: Math.max(...this.clientes.map(c => c.id), 0) + 1,
      nombre: `${nuevoCliente.ClienteNombre1} ${nuevoCliente.ClienteNombre2} ${nuevoCliente.ClienteApellido1} ${nuevoCliente.ClienteApellido2}`.trim(),
      identificacion: nuevoCliente.ClienteRuc,
      fechaIngreso: new Date(nuevoCliente.FechaHoraReg),
      estatus
    });
    
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Cliente guardado correctamente.' });
  }

  cargarCliente(resp: any) {
    this.clientes = resp.data.map((cliente: any) => {
      const estatus = cliente.estado === 1
        ? { label: 'Activo', value: 'activo' }
        : { label: 'Inactivo', value: 'inactivo' };

      return {
        id: cliente.clienteId,
        nombre: `${cliente.clienteNombre1} ${cliente.clienteNombre2} ${cliente.clienteApellido1} ${cliente.clienteApellido2}`.trim(),
        identificacion: cliente.clienteRuc,
        fechaIngreso: new Date(cliente.fechaHoraReg),
        estatus
      };
    });
  }

  eliminarCliente(cliente: any) {
    // Implementar la lógica de eliminación aquí
  }

  editarCliente(cliente: any) {
    if (this.dialogoCliente) {
      this.dialogoCliente.cargarDatosCliente(cliente); // Cargar los datos del cliente en el diálogo
      this.dialogoCliente.visibleClient = true; // Mostrar el diálogo
    }
  }
}
