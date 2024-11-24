import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-requests',
  templateUrl: './resource-requests.component.html',
  styleUrls: ['./resource-requests.component.scss']
})
export class SolicitudRecursosComponent {
  // Lista de todas las solicitudes de recursos
  requests = [
    {
      resource: 'Laptop',
      quantity: '2 unidades',
      justification: 'Requerido para nuevos empleados',
      requestDate: '2024-11-20',
      neededDate: '2024-11-30',
      status: 'Pendiente'
    },
    {
      resource: 'Sillas de oficina',
      quantity: '10 unidades',
      justification: 'Actualización de mobiliario',
      requestDate: '2024-11-15',
      neededDate: '2024-12-01',
      status: 'Pendiente'
    },
    {
      resource: 'Servidor',
      quantity: '1 unidad',
      justification: 'Ampliación de infraestructura TI',
      requestDate: '2024-11-18',
      neededDate: '2024-12-10',
      status: 'Aprobada'
    }
  ];

  // Campo de entrada del nombre del proyecto
  projectName: string = '';

  // Lista filtrada para mostrar en la tabla
  filteredRequests = this.requests;

  // Filtrar solicitudes por el nombre del proyecto
  filterRequests() {
    if (this.projectName.trim()) {
      this.filteredRequests = this.requests.filter(request =>
        request.resource.toLowerCase().includes(this.projectName.toLowerCase())
      );
    } else {
      this.filteredRequests = this.requests;
    }
  }

  // Aprobar una solicitud
  approveRequest(request: any) {
    request.status = 'Aprobada';
    alert(`La solicitud de ${request.resource} ha sido aprobada.`);
  }

  // Rechazar una solicitud
  rejectRequest(request: any) {
    request.status = 'Rechazada';
    alert(`La solicitud de ${request.resource} ha sido rechazada.`);
  }
}
