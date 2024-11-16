import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { GestionTareasComponent } from './gestion-tareas/gestion-tareas.component'; 
import { SolicitudRecursosComponent } from './Solicitud-Recursos/Solicitud-Recursos.component';
import { GeneracionReportesComponent } from './Generacion-Reportes/Generacion-Reportes.component';
import { GestionTransaccionesComponent } from './Gestion-transacciones/Gestion-transacciones.component';
import { MonitoreoRecursosComponent } from './Monitoreo-recursos/Monitoreo-Recursos.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    { path: '', component: BienvenidaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'gestion-tareas', component: GestionTareasComponent },
    { path: 'solicitud-recursos', component: SolicitudRecursosComponent } ,
    { path: 'generacion-reportes', component: GeneracionReportesComponent },
    { path: 'gestion-transacciones', component: GestionTransaccionesComponent },
    {path: 'monitoreo-recursos', component: MonitoreoRecursosComponent}

];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withDebugTracing())]
};
