import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { ConfirmarEnvioComponent } from './confirmar-envio/confirmar-envio.component';
import { PagoEnvioComponent } from './pago-envio/pago-envio.component';
import { GenerarInformeContableComponent } from './generar-informe-contable/generar-informe-contable.component';
import { GenerarInformeContableShowComponent } from './generar-informe-contable-show/generar-informe-contable-show.component';
import { ListaEmpleadosPagosComponent } from './lista-empleados-pagos/lista-empleados-pagos.component';
import { SeguridadSaludComponent } from './CapacitacionSeguridad-salud/seguridad-salud.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { RegistroVentasComponent } from './registro-ventas/registro-ventas.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { GestionCobrosComponent } from './gestion-cobros/gestion-cobros.component';

import { GestionTareasComponent } from './gestion-tareas/gestion-tareas.component'; 
//import { SolicitudRecursosComponent } from './Solicitud-Recursos/solicitud-recursos.component';
//import { GeneracionReportesComponent } from './Generacion-Reportes/generacion-reportes.component';
//import { GestionTransaccionesComponent } from './Gestion-transacciones/gestion-transacciones.component';
//import { MonitoreoRecursosComponent } from './Monitoreo-recursos/monitoreo-recursos.component';
import { ApplicationConfig } from '@angular/core';
import { RegistroVentasListaComponent } from './registro-ventas-lista/registro-ventas-lista.component';
import { GestionContenidoPComponent } from './gestion-contenido-p/gestion-contenido-p.component';
import { GestionContenidoEditarComponent } from './gestion-contenido-editar/gestion-contenido-editar.component';
import { GestionContenidoAnadirComponent } from './gestion-contenido-anadir/gestion-contenido-anadir.component';
import { Gestiondeinventario } from './gestiondeinventario/gestiondeinventario.component';


export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent },
  { path: 'formulario-envio', component: FormularioEnvioComponent },
  { path: 'confirmar-envio', component: ConfirmarEnvioComponent },
  { path: 'pago-envio', component: PagoEnvioComponent },
  { path: 'generar-informe-contable', component: GenerarInformeContableComponent },
  { path: 'generar-informe-contable', component: GenerarInformeContableComponent },
  { path: 'generar-informe-contable-show', component: GenerarInformeContableShowComponent },
  { path: 'lista-empleados-pagos', component: ListaEmpleadosPagosComponent },
  { path: 'seguridad-salud', component: SeguridadSaludComponent },
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'gestion-tareas', component: GestionTareasComponent },
 // { path: 'solicitud-recursos', component: SolicitudRecursosComponent },
  //{ path: 'generacion-reportes', component: GeneracionReportesComponent },
  //{ path: 'gestion-transacciones', component: GestionTransaccionesComponent },
  //{path: 'monitoreo-recursos', component: MonitoreoRecursosComponent},
 {path: 'registro-ventas' , component: RegistroVentasComponent},
 {path: 'registro-ventas-lista', component: RegistroVentasListaComponent},
 {path: 'gestion-contenido-p' , component:GestionContenidoPComponent},
 {path: 'gestion-contenido-editar' , component:GestionContenidoEditarComponent},
 {path: 'gestion-contenido-anadir' , component:GestionContenidoAnadirComponent},
 {path: 'gestiondeinventario' , component:Gestiondeinventario},
 {path: 'gestion-cobros',component:GestionCobrosComponent}
  //{path: 'monitoreo-recursos', component: MonitoreoRecursosComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())]

};
