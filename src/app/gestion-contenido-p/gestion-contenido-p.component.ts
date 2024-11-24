import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
interface ContentItem {
  imageUrl: string | ArrayBuffer | null;
  title: string;
  addedDate: string;
  publishDate: string;
  platform: string;
  description: string;
  selected?: boolean; // Propiedad opcional para la selección
}

@Component({
  selector: 'app-gestion-contenido-p',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './gestion-contenido-p.component.html',
  styleUrl: './gestion-contenido-p.component.scss'
})
export class GestionContenidoPComponent {

  items: ContentItem[] = [
    {
      imageUrl: '/assets/seguridad.jpg',
      title: 'Seguridad para el hogar',
      addedDate: '11/11/2022',
      publishDate: '19/11/2022',
      platform: 'Youtube',
      description: 'Video publicitario para la seguridad del hogar dirigido a Youtube',
      selected: false
    },
    {
      imageUrl: '/assets/seguridad.jpg',
      title: 'Seguridad para el hogar',
      addedDate: '11/11/2022',
      publishDate: '19/11/2022',
      platform: 'Facebook',
      description: 'Publicación fomentando productos para la seguridad del hogar',
      selected: false
    },
    {
      imageUrl: '/assets/seguridad.jpg',
      title: 'Seguridad para el hogar',
      addedDate: '11/11/2022',
      publishDate: 'Por publicar',
      platform: 'Instagram',
      description: 'Publicación fomentando productos para la seguridad del hogar',
      selected: false
    }
  ];
  filteredItems: ContentItem[] = [...this.items]; // Lista filtrada para búsqueda
  searchQuery: string = ''; // Consulta de búsqueda
  imagePreview: string | ArrayBuffer | null = null;
  nuevoContenido: ContentItem | null = null;


  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) {}


  // Método para abrir el componente de añadir contenido
  irAAnadirContenido() {
    this.router.navigate(['/gestion-contenido-anadir']);
  }
// Método para abrir el componente de añadir contenido
irAEditarContenido() {
  this.router.navigate(['/gestion-contenido-editar']);
}

  // Método para añadir un nuevo contenido a la lista
  addContent(item: ContentItem) {
    this.items.push(item);
    this.filteredItems = [...this.items]; // Actualizar la lista filtrada
  }

  // Método para recibir el nuevo contenido al regresar de 'AnadirContenidosComponent'
  onReturn() {
    if (this.nuevoContenido) {
      this.addContent(this.nuevoContenido);
      this.nuevoContenido = null; // Limpiar el temporal
    }
  }

  // Método para buscar en la lista de contenidos
  onSearch() {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Método para eliminar los contenidos seleccionados
  eliminarSeleccionados() {
    // Verificar si hay elementos seleccionados
    const seleccionados = this.items.filter(item => item.selected);
  
    if (seleccionados.length > 0) {
      // Mostrar el diálogo de confirmación
      const dialogRef = this.dialog.open(MatDialog, {
        width: '300px',
        data: { message: 'Elemento(s) eliminado(s) correctamente.' }
      });
  
      dialogRef.afterClosed().subscribe(() => {
        // Eliminar los elementos seleccionados
        this.items = this.items.filter(item => !item.selected);
        console.log('Elementos eliminados');
      });
    } else {
      // Mostrar un mensaje si no hay elementos seleccionados
      alert('No hay elementos seleccionados para eliminar.');
    }
  }
  
  
  // Método para editar un contenido seleccionado
  editarContenidoSeleccionado() {
    const seleccionado = this.items.find(item => item.selected);
    if (seleccionado) {
      this.router.navigate(['/anadir-contenidos'], { state: { content: seleccionado } });
    } else {
      console.log('No hay contenido seleccionado');
    }
  }

}
