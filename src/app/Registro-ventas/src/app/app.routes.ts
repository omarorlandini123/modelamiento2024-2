import { Routes } from '@angular/router';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { TablaRegistroComponent } from './tabla-registro/tabla-registro.component';

export const routes: Routes = [
  { path: 'registro', component: FormRegistroComponent },
  { path: 'tabla-registro', component: TablaRegistroComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
];