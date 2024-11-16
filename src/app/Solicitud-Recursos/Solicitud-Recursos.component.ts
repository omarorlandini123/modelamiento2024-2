import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-solicitud-recursos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
  ],
  templateUrl: './solicitud-recursos.component.html',
  styleUrls: ['./solicitud-recursos.component.scss']
})
export class SolicitudRecursosComponent {
<<<<<<< HEAD
  nombreProyecto: string = '';


=======
  // Declaración de la propiedad nombreProyecto
  nombreProyecto: string = '';

  // Lista de solicitudes de ejemplo
>>>>>>> 463067f (Administracion)
  solicitudes = [
    {
      recurso: 'Material',
      descripcion: 'Equipos de computo',
      justificacion: 'Necesarios para el proyecto de desarrollo',
      fechaSolicitud: '2024-11-10',
      fechaNecesaria: '2024-11-20',
      estado: 'Pendiente'
    },
    {
      recurso: 'Humano',
      descripcion: 'Desarrollador Backend',
      justificacion: 'Requerido para la integración de la API',
      fechaSolicitud: '2024-11-12',
      fechaNecesaria: '2024-11-30',
      estado: 'Pendiente'
    }
  ];

  aprobarSolicitud(solicitud: any) {
<<<<<<< HEAD
=======
    // Lógica de aprobación
>>>>>>> 463067f (Administracion)
    solicitud.estado = 'Aprobado';
  }

  rechazarSolicitud(solicitud: any) {
<<<<<<< HEAD
=======
    // Lógica de rechazo
>>>>>>> 463067f (Administracion)
    solicitud.estado = 'Rechazado';
  }

  verSolicitudesAnteriores() {
<<<<<<< HEAD
=======
    // Lógica para ver solicitudes anteriores
>>>>>>> 463067f (Administracion)
    console.log('Ver detalles de solicitudes anteriores');
  }
}
