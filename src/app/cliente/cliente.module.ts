import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';

@NgModule({
  declarations: [
    DetalleClienteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    DetalleClienteComponent
  ]
})
export class ClienteModule { }
