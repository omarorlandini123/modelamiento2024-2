import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-generacion-reportes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './generacion-reportes.component.html',
  styleUrls: ['./generacion-reportes.component.scss']
})
export class GeneracionReportesComponent {

  proyectos = [
    { id: 1, nombre: 'Proyecto A' },
    { id: 2, nombre: 'Proyecto B' },
    { id: 3, nombre: 'Proyecto C' }
  ];


  selectedProyecto: any;
  selectedTipoReporte: string = 'Progreso de Tareas';
  selectedEstado: string = 'Todos';
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;


  reporteGenerado: boolean = false;
  progresoTareasVistaPrevia: string = 'Vista previa del progreso de las tareas aquí.';
  informeFinancieroVistaPrevia: string = 'Vista previa de las transacciones y balance aquí.';

  constructor() {}


  generarReporte(): void {
    this.reporteGenerado = true;

    if (this.selectedTipoReporte === 'Progreso de Tareas') {
      this.progresoTareasVistaPrevia = 'Datos reales del progreso de las tareas generadas.';
    } else if (this.selectedTipoReporte === 'Finanzas') {
      this.informeFinancieroVistaPrevia = 'Datos reales del informe financiero generados.';
    }
  }


  exportarAExcel(): void {
    console.log('Exportando reporte a Excel...');
    
  }

 
  imprimirReporte(): void {
    console.log('Imprimiendo reporte...');
    window.print();
  }


  verDetallesProyecto(): void {
    console.log('Mostrando detalles del proyecto...');
  
  }
}
