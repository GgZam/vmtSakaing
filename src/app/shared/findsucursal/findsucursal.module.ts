import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindsucursalComponent } from './findsucursal.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FindsucursalComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    DynamicDialogModule,
    TableModule,
    FormsModule
  ],
  exports: [
    FindsucursalComponent
  ]
})
export class FindsucursalModule { }
