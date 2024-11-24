import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './gestion-cobros.component.html',
  styleUrls: ['./gestion-cobros.component.scss']
})
export class GestionCobrosComponent implements OnInit {
  cobros: Cobro[] = [
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1001, cliente: 'Carlos', fecha: '11/15/2022', producto: 'PEPSI', monto: 14.00 },
    { id: 1002, cliente: 'María', fecha: '12/10/2022', producto: 'FANTA', monto: 12.00 },
    { id: 1003, cliente: 'Ana', fecha: '01/22/2023', producto: 'SPRITE', monto: 18.00 },
    { id: 1004, cliente: 'Luis', fecha: '02/18/2023', producto: 'AGUA', monto: 10.00 },
    { id: 1005, cliente: 'Luis', fecha: '02/18/2023', producto: 'AGUA', monto: 10.00 },
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1001, cliente: 'Carlos', fecha: '11/15/2022', producto: 'PEPSI', monto: 14.00 },
    { id: 1002, cliente: 'María', fecha: '12/10/2022', producto: 'FANTA', monto: 12.00 },
    { id: 1003, cliente: 'Ana', fecha: '01/22/2023', producto: 'SPRITE', monto: 18.00 },
    { id: 1004, cliente: 'Luis', fecha: '02/18/2023', producto: 'AGUA', monto: 10.00 },
    { id: 1005, cliente: 'Luis', fecha: '02/18/2023', producto: 'AGUA', monto: 10.00 },
    { id: 1000, cliente: 'Juancito', fecha: '10/20/2022', producto: 'COCACOLA', monto: 16.00 },
    { id: 1001, cliente: 'Carlos', fecha: '11/15/2022', producto: 'PEPSI', monto: 14.00 },
    { id: 1002, cliente: 'María', fecha: '12/10/2022', producto: 'FANTA', monto: 12.00 },
    { id: 1003, cliente: 'Ana', fecha: '01/22/2023', producto: 'SPRITE', monto: 18.00 },
    { id: 1004, cliente: 'Luis', fecha: '02/18/2023', producto: 'AGUA', monto: 10.00 },
    { id: 1005, cliente: 'Luis', fecha: '02/18/2023', producto: 'AGUA', monto: 10.00 }

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
    console.log('Buscando con filtros:', this.filtros);
  }

  exportarPDF(): void {
    console.log('Exportando a PDF...');
  }

  cobrar(cobro: Cobro): void {
    console.log('Procesando cobro:', cobro);
  }
}
