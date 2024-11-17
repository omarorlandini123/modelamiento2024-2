// gestion-cobros.component.ts
import { Component, OnInit } from '@angular/core';

interface Cobro {
  id: number;
  cliente: string;
  fecha: string;
  producto: string;
  monto: number;
}

@Component({
  selector: 'app-gestion-cobros',
  standalone: true,
  imports: [],
  templateUrl: './gestion-cobros.component.html',
  styleUrls: ['./gestion-cobros.component.scss']
})
export class GestionCobrosComponent implements OnInit {
  cobros: Cobro[] = [
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 }
  ];

  filtros = {
    nombre: '',
    id: '',
    fecha: '',
    pedido: '',
    cantidad: ''
  };

  constructor() { }

  ngOnInit(): void { }

  buscar(): void {
    // Implementar lógica de búsqueda
    console.log('Buscando con filtros:', this.filtros);
  }

  exportarPDF(): void {
    // Implementar lógica de exportación
    console.log('Exportando a PDF...');
  }

  cobrar(cobro: Cobro): void {
    // Implementar lógica de cobro
    console.log('Procesando cobro:', cobro);
  }
}