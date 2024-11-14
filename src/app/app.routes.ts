import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

export const routes: Routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withDebugTracing())]
}