import { Component } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro-ventas-lista',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule, 
    RouterModule,
  ],
  templateUrl: './registro-ventas-lista.component.html',
  styleUrl: './registro-ventas-lista.component.scss'
})
export class RegistroVentasListaComponent {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'fecha',
    'dni',
    'telefono',
    'direccion',
    'productos',
    'cantidad',
    'total',
    'observaciones',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  regresar() {
    this.router.navigate(['/registro-ventas']); 
  }

}
const ELEMENT_DATA = [
  {
    id: 1,
    nombre: 'Ronaldo',
    fecha: '21/08/2024',
    dni: '77447828',
    telefono: '984546865',
    direccion: 'Av. Lago',
    productos: 'Producto 1',
    cantidad: 2,
    total: 'S/300',
    observaciones: 'Urgente',
  },
  {
    id: 2,
    nombre: 'Sebastian',
    fecha: '21/08/2024',
    dni: '88541254',
    telefono: '958854152',
    direccion: 'Av. Zócalo',
    productos: 'Producto 2',
    cantidad: 1,
    total: 'S/150',
    observaciones: 'Pendiente',
  },
  {
    id: 3,
    nombre: 'Roxana',
    fecha: '22/08/2024',
    dni: '74412345',
    telefono: '945678901',
    direccion: 'Av. América',
    productos: 'Producto 3',
    cantidad: 3,
    total: 'S/450',
    observaciones: 'Completo',
  },
  {
    id: 4,
    nombre: 'Rosa',
    fecha: '22/08/2024',
    dni: '78451236',
    telefono: '912345678',
    direccion: 'Av. Sol',
    productos: 'Producto 4',
    cantidad: 5,
    total: 'S/750',
    observaciones: 'Sin detalles',
  },
  {
    id: 5,
    nombre: 'Angie',
    fecha: '23/08/2024',
    dni: '77448596',
    telefono: '923456789',
    direccion: 'Av. Flores',
    productos: 'Producto 5',
    cantidad: 4,
    total: 'S/600',
    observaciones: 'Por confirmar',
  },
  {
    id: 6,
    nombre: 'Carlos',
    fecha: '24/08/2024',
    dni: '77412378',
    telefono: '987654321',
    direccion: 'Av. Central',
    productos: 'Producto 6',
    cantidad: 6,
    total: 'S/900',
    observaciones: 'En proceso',
  },
  {
    id: 7,
    nombre: 'Diana',
    fecha: '25/08/2024',
    dni: '77445123',
    telefono: '912345678',
    direccion: 'Av. Esperanza',
    productos: 'Producto 7',
    cantidad: 2,
    total: 'S/300',
    observaciones: 'Urgente',
  },
  {
    id: 8,
    nombre: 'Miguel',
    fecha: '26/08/2024',
    dni: '78412365',
    telefono: '934567890',
    direccion: 'Av. Las Torres',
    productos: 'Producto 8',
    cantidad: 7,
    total: 'S/1050',
    observaciones: 'Entregado',
  },
  {
    id: 9,
    nombre: 'Lucía',
    fecha: '27/08/2024',
    dni: '78451234',
    telefono: '945678901',
    direccion: 'Av. Nueva',
    productos: 'Producto 9',
    cantidad: 8,
    total: 'S/1200',
    observaciones: 'Completo',
  },
  {
    id: 10,
    nombre: 'Juan',
    fecha: '28/08/2024',
    dni: '77488956',
    telefono: '956789012',
    direccion: 'Av. Libertad',
    productos: 'Producto 10',
    cantidad: 10,
    total: 'S/1500',
    observaciones: 'Finalizado',
  },
];
