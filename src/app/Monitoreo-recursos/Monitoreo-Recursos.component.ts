import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitoreo-recursos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule
  ],
  templateUrl: './Monitoreo-Recursos.component.html',
  styleUrls: ['./Monitoreo-Recursos.component.scss']
})
export class MonitoreoRecursosComponent {
<<<<<<< HEAD

  proyectoNombre: string = 'Proyecto de Desarrollo de Software'; 

 
=======
  // Propiedad que se utilizará en el template
  proyectoNombre: string = 'Proyecto de Desarrollo de Software'; // Asigna el nombre del proyecto aquí

  // Lista de recursos para mostrar en el monitoreo
>>>>>>> 463067f (Administracion)
  recursos = [
    {
      tipo: 'Material',
      descripcion: 'Equipos de computo',
      cantidadSolicitada: 100,
      cantidadDisponible: 80,
      estado: 'Disponible'
    },
    {
      tipo: 'Humano',
      descripcion: 'Desarrollador Backend',
      cantidadSolicitada: 1,
      cantidadDisponible: 1,
      estado: 'En Uso'
    },
    {
      tipo: 'Financiero',
      descripcion: 'Presupuesto de Marketing',
      cantidadSolicitada: 5000,
      cantidadDisponible: 3000,
      estado: 'Pendiente'
    }
  ];

<<<<<<< HEAD
  
=======
  // Función para asignar un recurso
>>>>>>> 463067f (Administracion)
  asignarRecurso(recurso: any) {
    console.log('Recurso asignado:', recurso);
  }

<<<<<<< HEAD
  
=======
  // Función para ver historial de uso de un recurso
>>>>>>> 463067f (Administracion)
  verHistorial(recurso: any) {
    console.log('Ver historial de uso para:', recurso);
  }

<<<<<<< HEAD
  
=======
  // Nueva función para ver historial general de recursos
>>>>>>> 463067f (Administracion)
  verHistorialGeneral() {
    console.log('Ver historial general de recursos');
  }
}
