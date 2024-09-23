import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule)
  },
  {
    path: 'bodega',
    loadChildren: () => import('./bodega/bodega.module').then(m => m.BodegaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
