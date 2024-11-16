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

  proyectoNombre: string = 'Proyecto de Desarrollo de Software'; 

 
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

  
  asignarRecurso(recurso: any) {
    console.log('Recurso asignado:', recurso);
  }

  
  verHistorial(recurso: any) {
    console.log('Ver historial de uso para:', recurso);
  }

  
  verHistorialGeneral() {
    console.log('Ver historial general de recursos');
  }
}
