import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-empleados-pagos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-empleados-pagos.component.html',
  styleUrl: './lista-empleados-pagos.component.scss'
})
export class ListaEmpleadosPagosComponent {
  empleados = [
    { nombre: 'Ana García', cargo: 'Desarrolladora', fechaInicio: '2023-01-10', email: 'ana.garcia@email.com', horasTrabajadas: 40, pagoPorHora: 15, totalPagar: 600, pagado: true },
    { nombre: 'Juan Pérez', cargo: 'Diseñador', fechaInicio: '2022-06-15', email: 'juan.perez@email.com', horasTrabajadas: 35, pagoPorHora: 18, totalPagar: 630, pagado: false },
    { nombre: 'Carlos López', cargo: 'Gerente de Proyecto', fechaInicio: '2021-11-20', email: 'carlos.lopez@email.com', horasTrabajadas: 45, pagoPorHora: 20, totalPagar: 900, pagado: true },
    { nombre: 'María Torres', cargo: 'Analista', fechaInicio: '2022-03-30', email: 'maria.torres@email.com', horasTrabajadas: 30, pagoPorHora: 22, totalPagar: 660, pagado: false }
  ];

  get totalPagar() {
    return this.empleados.reduce((sum, empleado) => sum + empleado.totalPagar, 0);
  }

  exportarCSV() {
    const encabezados = 'Empleado,Cargo,Fecha de Inicio,Email,Horas Trabajadas,Pago por Hora,Total a Pagar,Estado de Pago\n';
    const filas = this.empleados.map(emp => 
      `${emp.nombre},${emp.cargo},${emp.fechaInicio},${emp.email},${emp.horasTrabajadas} hrs.,$${emp.pagoPorHora},$${emp.totalPagar},${emp.pagado ? 'Pagado' : 'No Pagado'}`
    ).join('\n');

    const csvContenido = encabezados + filas;
    const blob = new Blob([csvContenido], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'empleados-pagos.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}


