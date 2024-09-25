import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { DialogproveedorComponent } from './dialogproveedor/dialogproveedor.component';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  providers: [MessageService]
})
export class ProveedorComponent implements OnInit, AfterViewInit {

  proveedores: any[] = [];
  loading: boolean = true;

  proveedorService = inject(ProveedorService);

  @ViewChild(DialogproveedorComponent) dialogoProveedor: DialogproveedorComponent;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores() {
    const params = { identificacion: 0 }; // Enviamos el valor 0 como identificacion
    this.proveedorService.getProveedores(params).subscribe({
      next: (resProveedores) => {
        if (resProveedores && resProveedores.data) {
          // Mapear los campos que vienen del backend para que coincidan con los que se utilizan en la tabla del frontend
          this.proveedores = resProveedores.data.map(proveedor => ({
            nombre: proveedor.provNomComercial,
            ruc: proveedor.provRuc,
            razon: proveedor.provRazon,
            ciudad: proveedor.ciudadNombre,
            estado: proveedor.estado === 'A' ? 'activo' : 'inactivo'
          }));
        } else {
          console.warn('No se recibieron datos');
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar proveedores', err);
        this.loading = false;
      }
    });
  }

  dialogNuevoProveedor() {
    this.dialogoProveedor.visibleClient = true;
    this.dialogoProveedor.abrir();
  }

  guardarProveedor(dataProveedor: any) {
    this.loading = true;
    this.proveedorService.guardarProveedor(dataProveedor).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Proveedor guardado correctamente' });
        this.cargarProveedores();
      },
      error: (err) => {
        console.error('Error al guardar proveedor', err);
        this.loading = false;
      }
    });
  }

  editarProveedor(proveedor: any) {
    // Lógica para editar el proveedor
  }
}
