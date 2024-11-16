import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  
} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface PeriodicElement {
  name: string;
  position: number;
  width: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juan', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 2, name: 'Pepe', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 3, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 4, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 5, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 6, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 7, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 8, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 9, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
  {position: 10, name: 'Jose', width: 'Administracion', symbol: '01/01/2024 al 31/01/2024'},
];

@Component({
  selector: 'app-generar-informe-contable',
  standalone: true,
  imports: [MatToolbarModule,
            MatButtonModule, 
            MatIconModule,
            MatTableModule,MatButtonModule, MatDividerModule, MatIconModule,
            MatFormFieldModule, MatInputModule, MatTableModule ,MatButtonModule ,MatDialogTitle, MatDialogContent],
  templateUrl: './generar-informe-contable.component.html',
  styleUrl: './generar-informe-contable.component.scss'
})
export class GenerarInformeContableComponent {
  displayedColumns: string[] = ['position', 'name', 'width', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
}

