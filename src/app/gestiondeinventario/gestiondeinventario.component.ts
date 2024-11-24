import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

/**
 * @title Table with pagination and search functionality
 */
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
  ],
  templateUrl: './gestiondeinventario.component.html',
  styleUrls: ['./gestiondeinventario.component.css'],
})


export class Gestiondeinventario implements AfterViewInit {
  title = 'ModelamientoAngular';
  displayedColumns: string[] = ['position', 'codigo', 'modelo', 'entrada', 'salida', 'precio', 'stock', 'fecha'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  searchQuery: string = ''; // Variable para almacenar el texto ingresado en el campo de búsqueda

 


  @ViewChild(MatPaginator) paginator: MatPaginator | null = null; // Cambié a MatPaginator | null

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  // Filtrar datos según la búsqueda
  onSearch(): void {
    this.dataSource.filter = this.searchQuery.trim().toLowerCase();
  }

}


// Interfaz para los elementos de la tabla
export interface PeriodicElement {
  codigo:number;
  modelo: string;
  entrada: string;
  salida: string;
  position: number;
  precio: number;
  stock: string;
  fecha: Date;

}

// Datos de ejemplo para la tabla
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, codigo: 11111, modelo: 'Hydrogen', entrada: '45 packets', salida: '3 packets', precio: 1.0079, stock: '42 packets', fecha: new Date(2024, 0, 18) }, // 18 de enero de 2024
  { position: 2, codigo: 22222, modelo: 'Helium', entrada: '45 packets', salida: '3 packets', precio: 4.0026, stock: '30 packets', fecha: new Date(2024, 1, 5) }, // 5 de febrero de 2024
  { position: 3, codigo: 33333, modelo: 'Lithium', entrada: '45 packets', salida: '3 packets', precio: 6.941, stock: '30 packets', fecha: new Date(2024, 2, 15) }, // 15 de marzo de 2024
  { position: 4, codigo: 44444, modelo: 'Beryllium', entrada: '45 packets', salida: '3 packets', precio: 9.0122, stock: '30 packets', fecha: new Date(2024, 3, 22) }, // 22 de abril de 2024
  { position: 5, codigo: 55555, modelo: 'Boron', entrada: '45 packets', salida: '3 packets', precio: 10.811, stock: '30 packets', fecha: new Date(2024, 4, 30) }, // 30 de mayo de 2024
  { position: 6, codigo: 66666, modelo: 'Carbon', entrada: '45 packets', salida: '3 packets', precio: 12.0107, stock: '30 packets', fecha: new Date(2024, 5, 10) }, // 10 de junio de 2024
  { position: 7, codigo: 77777, modelo: 'Nitrogen', entrada: '45 packets', salida: '3 packets', precio: 14.0067, stock: '30 packets', fecha: new Date(2024, 6, 18) }, // 18 de julio de 2024
  { position: 8, codigo: 88888, modelo: 'Oxygen', entrada: '45 packets', salida: '3 packets', precio: 15.9994, stock: '30 packets', fecha: new Date(2024, 7, 25) }, // 25 de agosto de 2024
  { position: 9, codigo: 99999, modelo: 'Fluorine', entrada: '45 packets', salida: '3 packets', precio: 18.9984, stock: '30 packets', fecha: new Date(2024, 8, 2) }, // 2 de septiembre de 2024
  { position: 10, codigo: 10000, modelo: 'Neon', entrada: '45 packets', salida: '3 packets', precio: 20.1797, stock: '30 packets', fecha: new Date(2024, 9, 15) }, // 15 de octubre de 2024
  { position: 11, codigo: 11000, modelo: 'Sodium', entrada: '45 packets', salida: '3 packets', precio: 22.9897, stock: '30 packets', fecha: new Date(2024, 10, 30) }, // 30 de noviembre de 2024
  { position: 12, codigo: 12000, modelo: 'Magnesium', entrada: '45 packets', salida: '3 packets', precio: 24.305, stock: '30 packets', fecha: new Date(2024, 11, 12) }, // 12 de diciembre de 2024
  { position: 13, codigo: 13000, modelo: 'Aluminum', entrada: '45 packets', salida: '3 packets', precio: 26.9815, stock: '30 packets', fecha: new Date(2024, 0, 5) }, // 5 de enero de 2024
  { position: 14, codigo: 14000, modelo: 'Silicon', entrada: '45 packets', salida: '3 packets', precio: 28.0855, stock: '30 packets', fecha: new Date(2024, 2, 20) }, // 20 de marzo de 2024
  { position: 15, codigo: 15000, modelo: 'Phosphorus', entrada: '45 packets', salida: '3 packets', precio: 30.9738, stock: '30 packets', fecha: new Date(2024, 4, 14) }, // 14 de mayo de 2024
  { position: 16, codigo: 16000, modelo: 'Sulfur', entrada: '45 packets', salida: '3 packets', precio: 32.065, stock: '30 packets', fecha: new Date(2024, 6, 5) }, // 5 de julio de 2024
  { position: 17, codigo: 17000, modelo: 'Chlorine', entrada: '45 packets', salida: '3 packets', precio: 35.453, stock: '30 packets', fecha: new Date(2024, 8, 8) }, // 8 de septiembre de 2024
  { position: 18, codigo: 18000, modelo: 'Argon', entrada: '45 packets', salida: '3 packets', precio: 39.948, stock: '30 packets', fecha: new Date(2024, 10, 11) }, // 11 de octubre de 2024
  { position: 19, codigo: 19000, modelo: 'Potassium', entrada: '45 packets', salida: '3 packets', precio: 39.0983, stock: '30 packets', fecha: new Date(2024, 1, 19) }, // 19 de febrero de 2024
  { position: 20, codigo: 20000, modelo: 'Calcium', entrada: '45 packets', salida: '3 packets', precio: 40.078, stock: '30 packets', fecha: new Date(2024, 3, 7) } // 7 de abril de 2024
];
