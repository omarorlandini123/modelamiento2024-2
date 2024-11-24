import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-tareas',
  templateUrl: './gestion-tareas.component.html',
  styleUrls: ['./gestion-tareas.component.scss']
})
export class GestionTareasComponent {
  // Modelo para el formulario
  project: string = '';
  task: string = '';
  startDate: string = '';
  endDate: string = '';
  status: string = 'disabled';

  // Lista de tareas con información inicial
  tasks = [
    {
      progreso: '50%',
      tiempoConsumido: '2 horas',
      recursosUtilizados: 'Material A',
      obstaculos: 'Ninguno',
      comentarios: 'Avance según lo esperado',
      acciones: ['Ver Detalles', 'Reasignar Tarea']
    },
    {
      progreso: '75%',
      tiempoConsumido: '3 horas',
      recursosUtilizados: 'Material B',
      obstaculos: 'Falta de personal',
      comentarios: 'Demora por falta de recursos',
      acciones: ['Ver Detalles', 'Reasignar Tarea']
    }
  ];

  // Método para generar informe de progreso
  generarInforme() {
    alert(`Informe de Progreso:
      Proyecto: ${this.project}
      Tarea: ${this.task}
      Fecha de Inicio: ${this.startDate}
      Fecha de Entrega: ${this.endDate}
      Estado: ${this.status}`);
  }

  // Método para ver los detalles de una tarea
  verDetalles(tarea: any) {
    alert(`Detalles de la Tarea:
      Progreso: ${tarea.progreso}
      Tiempo Consumido: ${tarea.tiempoConsumido}
      Recursos Utilizados: ${tarea.recursosUtilizados}
      Obstáculos: ${tarea.obstaculos}
      Comentarios: ${tarea.comentarios}`);
  }

  // Método para reasignar una tarea
  reasignarTarea(tarea: any) {
    const nuevaTarea = prompt('Ingrese el nuevo nombre para la tarea:', tarea.progreso);
    if (nuevaTarea !== null && nuevaTarea !== '') {
      tarea.progreso = nuevaTarea;
      alert(`La tarea ha sido reasignada con éxito a: ${nuevaTarea}`);
    }
  }
}
