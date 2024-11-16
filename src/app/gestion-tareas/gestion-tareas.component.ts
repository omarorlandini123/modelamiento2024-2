import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-gestion-tareas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
  templateUrl: './gestion-tareas.component.html',
  styleUrls: ['./gestion-tareas.component.scss']
})
export class GestionTareasComponent {
  tarea = {
    proyecto: 'Sistema de Inventarios',
    nombre: 'Desarrollo de módulo de reportes',
    fechaInicio: '2024-11-01',
    fechaEntrega: '2024-11-30',
    estado: 'En Progreso',
    progreso: 45,
    tiempoConsumido: '12:30',
    recursos: ['Base de datos', 'Diseño de interfaz'],
    obstaculos: '',
    comentarios: ''
  };

  estados = ['No Iniciado', 'En Progreso', 'Completado'];

  actualizarEstado(estado: string) {
    console.log('Estado actualizado a:', estado);
  }

  reasignarTarea() {
    console.log('Reasignar Tarea');
  }

  ajustarPrioridad() {
    console.log('Ajustar Prioridad');
  }

  generarInforme() {
    console.log('Generar Informe');
  }
}
