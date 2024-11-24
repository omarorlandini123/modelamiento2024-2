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
  selector: 'app-gestion-contenido-editar',
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
  templateUrl: './gestion-contenido-editar.component.html',
  styleUrl: './gestion-contenido-editar.component.scss'
})
export class GestionContenidoEditarComponent {
  
  contenidoForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private location: Location) {
    this.contenidoForm = this.fb.group({
      nombre: [''],
      dirigidoA: [''],
      fecha: [''],
      estado: [''],
      descripcion: ['']
    });
  }


  ngOnInit() {
    const content = history.state.content; // Recibe los datos enviados
    if (content) {
      this.imagePreview = content.imageUrl; // Vista previa de la imagen
      this.contenidoForm.patchValue({
        nombre: content.title,
        dirigidoA: content.platform,
        fecha: content.publishDate,
        estado: 'publicado', // O cualquier otro valor
        descripcion: content.description
      });
    }
  }

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

  onCancel(): void {
    this.location.back(); // Navega hacia la página anterior
  }

}
