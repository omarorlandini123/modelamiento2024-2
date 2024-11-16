import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
<<<<<<< HEAD
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
=======
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { ConfirmarEnvioComponent } from './confirmar-envio/confirmar-envio.component';
import { PagoEnvioComponent } from './pago-envio/pago-envio.component';
import { ListaEmpleadosPagosComponent } from './lista-empleados-pagos/lista-empleados-pagos.component';


export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent },
  { path: 'formulario-envio', component: FormularioEnvioComponent },
  { path: 'confirmar-envio', component: ConfirmarEnvioComponent },
  { path: 'pago-envio', component: PagoEnvioComponent },
  { path: 'lista-empleados-pagos', component: ListaEmpleadosPagosComponent },

>>>>>>> 016f493429659b31eff40c08030c4b831206d2e2

];

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
    providers: [provideRouter(routes, withDebugTracing())]
=======
  providers: [provideRouter(routes, withDebugTracing())],
>>>>>>> 016f493429659b31eff40c08030c4b831206d2e2
};
