import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

export const routes: Routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formulario-registro', component: FormularioRegistroComponent }

];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withDebugTracing())]
}