import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.scss'
})
export class BienvenidaComponent {

}
