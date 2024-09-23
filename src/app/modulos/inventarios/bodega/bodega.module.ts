import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodegaRoutingModule } from './bodega-routing.module';
import { BodegaComponent } from './bodega/bodega.component';
import { DialogbodegaComponent } from './bodega/dialogbodega/dialogbodega.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { FindsucursalModule } from 'src/app/shared/findsucursal/findsucursal.module';


@NgModule({
  declarations: [
    BodegaComponent,
    DialogbodegaComponent
  ],
  imports: [
    CommonModule,
    BodegaRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    DividerModule,
    InputTextModule,
    InputGroupModule,
    FormsModule,
    FindsucursalModule
  ]
})
export class BodegaModule { }
