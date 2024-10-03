import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindempresaComponent } from './findempresa.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    FindempresaComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    DynamicDialogModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ],
  exports: [
    FindempresaComponent
  ]
})
export class FindempresaModule { }
