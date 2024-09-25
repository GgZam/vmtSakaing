import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { TableModule } from 'primeng/table';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { DialogproveedorComponent } from './proveedor/dialogproveedor/dialogproveedor.component';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { ToastModule } from 'primeng/toast';
import { FindcategoriaComponent } from "../../../shared/findcategoria/findcategoria.component";
import { FindcategoriaModule } from 'src/app/shared/findcategoria/findcategoria.module';


@NgModule({
  declarations: [
    ProveedorComponent,
    DialogproveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    InputGroupModule,
    FindcategoriaModule
]
})
export class ProveedorModule { }
