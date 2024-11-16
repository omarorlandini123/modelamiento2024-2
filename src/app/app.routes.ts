import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
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


];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
