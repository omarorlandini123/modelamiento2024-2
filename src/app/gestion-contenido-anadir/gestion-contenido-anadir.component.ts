import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; // Importa Location
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-gestion-contenido-anadir',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './gestion-contenido-anadir.component.html',
  styleUrl: './gestion-contenido-anadir.component.scss'
})
export class GestionContenidoAnadirComponent {
  contenidoForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  // Inyección del servicio Location en el constructor
  constructor(private fb: FormBuilder, private location: Location) {
    this.contenidoForm = this.fb.group({
      nombre: [''],
      dirigidoA: [''],
      fecha: [''],
      estado: [''],
      descripcion: ['']
    });
  }

  // Definición de la función onImageSelected
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSave() {
    this.location.back();
  }

  // Método para regresar a la página anterior
  onCancel() {
    this.location.back(); // Navega hacia la página anterior
  }

}
