import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon'; // Para los iconos

@Component({
  selector: 'app-gestion-transacciones',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './gestion-transacciones.component.html',
  styleUrls: ['./gestion-transacciones.component.scss']
})
export class GestionTransaccionesComponent {
  nombreProyecto: string = 'Proyecto de Desarrollo Web';

  transacciones = [
    {
      monto: 1500,
      categoria: 'Ingreso',
      descripcion: 'Pago por servicio prestado',
      fecha: '2024-11-10',
      estado: 'Pendiente'
    },
    {
      monto: 500,
      categoria: 'Gasto',
      descripcion: 'Compra de materiales',
      fecha: '2024-11-12',
      estado: 'Pendiente'
    }
  ];

  aprobarTransaccion(transaccion: any) {
    transaccion.estado = 'Aprobado';
    alert(`Transacción #${this.transacciones.indexOf(transaccion) + 1} aprobada.`);
  }

  rechazarTransaccion(transaccion: any) {
    transaccion.estado = 'Rechazado';
    alert(`Transacción #${this.transacciones.indexOf(transaccion) + 1} rechazada.`);
  }

  verTransaccionesAnteriores() {
    alert('Mostrando detalles de transacciones anteriores.');
  }
}
