import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-transacciones',
  templateUrl: './gestion-transacciones.component.html',
  styleUrls: ['./gestion-transacciones.component.scss']
})
export class GestionTransaccionesComponent {
  // Filtro de búsqueda por proyecto
  filtroProyecto: string = '';

  // Lista de transacciones
  transacciones = [
    {
      monto: 5000,
      categoria: 'Compra',
      descripcion: 'Compra de equipos informáticos',
      fecha: '2024-11-10',
      estado: 'Pendiente'
    },
    {
      monto: 1500,
      categoria: 'Pago',
      descripcion: 'Pago a proveedor',
      fecha: '2024-11-12',
      estado: 'Pendiente'
    },
    {
      monto: 10000,
      categoria: 'Inversión',
      descripcion: 'Inversión en nuevos proyectos',
      fecha: '2024-11-15',
      estado: 'Aprobada'
    },
    {
      monto: 2000,
      categoria: 'Compra',
      descripcion: 'Compra de materiales de oficina',
      fecha: '2024-11-18',
      estado: 'Rechazada'
    }
  ];

  // Lista de transacciones filtradas por el proyecto
  transaccionesFiltradas = this.transacciones;

  // Filtrar las transacciones por el nombre del proyecto
  filtrarPorProyecto() {
    if (this.filtroProyecto.trim()) {
      this.transaccionesFiltradas = this.transacciones.filter(transaccion =>
        transaccion.descripcion.toLowerCase().includes(this.filtroProyecto.toLowerCase())
      );
    } else {
      // Si no hay filtro, mostrar todas las transacciones
      this.transaccionesFiltradas = this.transacciones;
    }
  }

  // Ver los detalles de una transacción
  verDetalles(transaccion: any) {
    alert(`Detalles de la transacción:\n\nMonto: ${transaccion.monto}\nCategoría: ${transaccion.categoria}\nDescripción: ${transaccion.descripcion}\nFecha: ${transaccion.fecha}\nEstado: ${transaccion.estado}`);
  }

  // Aprobar una transacción
  aprobarSolicitud(transaccion: any) {
    if (transaccion.estado !== 'Aprobada') {
      transaccion.estado = 'Aprobada';
      alert(`La transacción de ${transaccion.descripcion} ha sido aprobada.`);
    }
  }

  // Rechazar una transacción
  rechazarSolicitud(transaccion: any) {
    if (transaccion.estado !== 'Rechazada') {
      transaccion.estado = 'Rechazada';
      alert(`La transacción de ${transaccion.descripcion} ha sido rechazada.`);
    }
  }
}
