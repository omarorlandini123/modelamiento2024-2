import { Component } from '@angular/core';

@Component({
  selector: 'app-generacion-reportes',
  templateUrl: './generacion-reportes.component.html',
  styleUrls: ['./generacion-reportes.component.scss']
})
export class GeneracionReportesComponent {
  // Modelos de datos para los inputs
  proyecto: string = '';
  fechaReporte: string = '';
  tipoReporte: string = '';
  estado: string = '';

  // Datos para los selects
  tiposReporte: string[] = ['Progreso', 'Financiero', 'General'];
  estados: string[] = ['Pendiente', 'Aprobado', 'Rechazado'];

  // Variables para los informes generados
  informeProgreso: string | null = null;
  informeFinanciero: string | null = null;

  // Método para generar el reporte
  generarReporte() {
    if (!this.proyecto || !this.fechaReporte || !this.tipoReporte || !this.estado) {
      alert('Por favor, complete todos los campos para generar el reporte.');
      return;
    }

    if (this.tipoReporte === 'Progreso') {
      this.informeProgreso = `Informe de Progreso para el Proyecto: ${this.proyecto} con fecha: ${this.fechaReporte} y estado: ${this.estado}.`;
      this.informeFinanciero = null;
    } else if (this.tipoReporte === 'Financiero') {
      this.informeFinanciero = `Informe Financiero para el Proyecto: ${this.proyecto} con fecha: ${this.fechaReporte} y estado: ${this.estado}.`;
      this.informeProgreso = null;
    } else {
      this.informeProgreso = `Informe General para el Proyecto: ${this.proyecto} con fecha: ${this.fechaReporte} y estado: ${this.estado}.`;
      this.informeFinanciero = null;
    }
  }

  // Método para descargar el reporte en formato PDF
  descargarPDF() {
    const reporte = this.tipoReporte === 'Progreso' ? this.informeProgreso : this.informeFinanciero;
    if (reporte) {
      // Simulación de descarga de PDF (requiere librería como jsPDF en un caso real)
      alert(`Descargando PDF del reporte: ${reporte}`);
    } else {
      alert('Por favor, genere un reporte antes de intentar descargarlo.');
    }
  }

  // Método para imprimir el reporte
  imprimir() {
    const reporte = this.tipoReporte === 'Progreso' ? this.informeProgreso : this.informeFinanciero;
    if (reporte) {
      const ventanaImpresion = window.open('', '', 'height=800,width=600');
      ventanaImpresion?.document.write('<html><head><title>Imprimir Reporte</title></head><body>');
      ventanaImpresion?.document.write(`<h1>${this.tipoReporte} Reporte</h1>`);
      ventanaImpresion?.document.write(`<p>${reporte}</p>`);
      ventanaImpresion?.document.write('</body></html>');
      ventanaImpresion?.document.close();
      ventanaImpresion?.print();
    } else {
      alert('Por favor, genere un reporte antes de intentar imprimirlo.');
    }
  }
}
