import { Component, Output, EventEmitter } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dialogcliente',
  templateUrl: './dialogcliente.component.html',
  styles: []
})
export class DialogclienteComponent {
  visibleClient: boolean = false;
  primerNombre: string = '';
  segundoNombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  identificacion: string = '';
  fechaIngreso: Date | null = null;
  estatus: any = { label: 'Activo', value: 'activo' };

  statuses: any[] = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' }
  ];

  @Output() clienteGuardado: EventEmitter<any> = new EventEmitter();

  constructor(private clientesService: ClientesService, private messageService: MessageService) {}

  // Método para cargar los datos del cliente seleccionado
  cargarDatosCliente(cliente: any) {
    this.primerNombre = cliente.nombre.split(' ')[0];
    this.segundoNombre = cliente.nombre.split(' ')[1] || '';
    this.apellido1 = cliente.apellido1;
    this.apellido2 = cliente.apellido2;
    this.identificacion = cliente.identificacion;
    this.fechaIngreso = cliente.fechaIngreso;
    this.estatus = cliente.estatus;
  }

  guardar() {
    const nuevoCliente = {
      ClienteNombre1: this.primerNombre,
      ClienteNombre2: this.segundoNombre,
      ClienteApellido1: this.apellido1,
      ClienteApellido2: this.apellido2,
      ClienteRuc: this.identificacion,
      FechaHoraReg: this.fechaIngreso ? this.fechaIngreso.toISOString() : null,
      Estado: this.estatus.value === 'activo' ? 1 : 0
    };

    this.clientesService.postCliente(nuevoCliente).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Cliente guardado correctamente.' });
        this.clienteGuardado.emit(nuevoCliente);
        this.visibleClient = false; // Cerrar el diálogo
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo guardar el cliente.' });
      }
    });
  }
}
