import { Component } from '@angular/core';

@Component({
  selector: 'app-monitoreo-recursos',
  templateUrl: './monitoreo-recursos.component.html',
  styleUrls: ['./monitoreo-recursos.component.scss']
})
export class MonitoreoRecursosComponent {
  // Campo de búsqueda para proyecto
  proyecto: string = '';

  // Lista de recursos
  recursos = [
    {
      tipo: 'Laptop',
      descripcion: 'Laptop de alto rendimiento',
      cantidadSolicitada: 5,
      cantidadDisponible: 3,
      estado: 'Disponible'
    },
    {
      tipo: 'Sillas de oficina',
      descripcion: 'Sillas ergonómicas para oficina',
      cantidadSolicitada: 10,
      cantidadDisponible: 7,
      estado: 'Disponible'
    },
    {
      tipo: 'Proyector',
      descripcion: 'Proyector de última generación',
      cantidadSolicitada: 2,
      cantidadDisponible: 0,
      estado: 'No Disponible'
    },
    {
      tipo: 'Pantallas',
      descripcion: 'Pantallas para sala de reuniones',
      cantidadSolicitada: 3,
      cantidadDisponible: 1,
      estado: 'No Disponible'
    }
  ];

  // Buscar recursos por proyecto
  buscarProyecto() {
    if (this.proyecto.trim()) {
      // Filtrar recursos por nombre del proyecto o tipo (puedes adaptarlo según tu lógica)
      this.recursos = this.recursos.filter(recurso =>
        recurso.descripcion.toLowerCase().includes(this.proyecto.toLowerCase())
      );
    } else {
      // Si no se especifica ningún proyecto, mostrar todos los recursos
      this.resetearBusqueda();
    }
  }

  // Resetear la búsqueda para mostrar todos los recursos
  resetearBusqueda() {
    this.recursos = [
      {
        tipo: 'Laptop',
        descripcion: 'Laptop de alto rendimiento',
        cantidadSolicitada: 5,
        cantidadDisponible: 3,
        estado: 'Disponible'
      },
      {
        tipo: 'Sillas de oficina',
        descripcion: 'Sillas ergonómicas para oficina',
        cantidadSolicitada: 10,
        cantidadDisponible: 7,
        estado: 'Disponible'
      },
      {
        tipo: 'Proyector',
        descripcion: 'Proyector de última generación',
        cantidadSolicitada: 2,
        cantidadDisponible: 0,
        estado: 'No Disponible'
      },
      {
        tipo: 'Pantallas',
        descripcion: 'Pantallas para sala de reuniones',
        cantidadSolicitada: 3,
        cantidadDisponible: 1,
        estado: 'No Disponible'
      }
    ];
  }

  // Ver detalles de un recurso
  verDetalles(recurso: any) {
    alert(`Detalles del recurso:\n\nTipo: ${recurso.tipo}\nDescripción: ${recurso.descripcion}\nCantidad solicitada: ${recurso.cantidadSolicitada}\nCantidad disponible: ${recurso.cantidadDisponible}\nEstado: ${recurso.estado}`);
  }
}
