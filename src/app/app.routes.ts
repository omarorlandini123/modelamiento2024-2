import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
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



export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent },
  { path: 'formulario-envio', component: FormularioEnvioComponent },
  { path: 'confirmar-envio', component: ConfirmarEnvioComponent },
  { path: 'pago-envio', component: PagoEnvioComponent },
  { path: 'generar-informe-contable' , component: GenerarInformeContableComponent},
  { path: 'generar-informe-contable-show' , component: GenerarInformeContableShowComponent},
  { path: 'lista-empleados-pagos' , component: ListaEmpleadosPagosComponent},
  { path: 'seguridad-salud' , component: SeguridadSaludComponent},
  { path: 'capacitaciones' , component: CapacitacionesComponent},




];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
