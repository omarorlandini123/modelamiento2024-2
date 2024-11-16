import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
<<<<<<< HEAD
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { ConfirmarEnvioComponent } from './confirmar-envio/confirmar-envio.component';
import { PagoEnvioComponent } from './pago-envio/pago-envio.component';
import { GenerarInformeContableComponent } from './generar-informe-contable/generar-informe-contable.component';
import { GenerarInformeContableShowComponent } from './generar-informe-contable-show/generar-informe-contable-show.component';
import { ListaEmpleadosPagosComponent } from './lista-empleados-pagos/lista-empleados-pagos.component';
import { SeguridadSaludComponent } from './CapacitacionSeguridad-salud/seguridad-salud.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';



export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent },
  { path: 'formulario-envio', component: FormularioEnvioComponent },
  { path: 'confirmar-envio', component: ConfirmarEnvioComponent },
  { path: 'pago-envio', component: PagoEnvioComponent },
  { path: 'generar-informe-contable' , component: GenerarInformeContableComponent},
  { path: 'generar-informe-contable' , component: GenerarInformeContableComponent},
  { path: 'generar-informe-contable-show' , component: GenerarInformeContableShowComponent},
  { path: 'lista-empleados-pagos' , component: ListaEmpleadosPagosComponent},
  { path: 'seguridad-salud' , component: SeguridadSaludComponent},
  { path: 'capacitaciones' , component: CapacitacionesComponent},



=======
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
>>>>>>> 463067f (Administracion)

];

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes, withDebugTracing())],
=======
    providers: [provideRouter(routes, withDebugTracing())]
>>>>>>> 463067f (Administracion)
};
