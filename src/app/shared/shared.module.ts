import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FindcategoriaComponent } from './findcategoria/findcategoria.component';
import { FindsucursalComponent } from './findsucursal/findsucursal.component';
import { FindcategoriaModule } from './findcategoria/findcategoria.module';
import { FindsucursalModule } from './findsucursal/findsucursal.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    FindcategoriaModule,
    FindsucursalModule
  ]
})
export class SharedModule { }
