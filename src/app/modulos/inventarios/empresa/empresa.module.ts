import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { TableModule } from 'primeng/table';
import { EmpresaComponent } from './empresa/empresa.component';
import { DialogempresaComponent } from './empresa/dialogempresa/dialogempresa.component';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    EmpresaComponent,
    DialogempresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    InputTextModule
  ]
})
export class EmpresaModule { }
