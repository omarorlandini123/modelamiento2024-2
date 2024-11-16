import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationConfig } from '@angular/core';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { ConfirmarEnvioComponent } from './confirmar-envio/confirmar-envio.component';
import { PagoEnvioComponent } from './pago-envio/pago-envio.component';
import { GenerarInformeContableComponent } from './generar-informe-contable/generar-informe-contable.component';
<<<<<<< HEAD
import { GenerarInformeContableShowComponent } from './generar-informe-contable-show/generar-informe-contable-show.component';
=======
import{ ControldeCalidadComponent}from './controlde-calidad/controlde-calidad.component';
import { generate } from 'rxjs';

>>>>>>> 18a2c386590f1db29e05ced122067e9fb0fb3454

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent },
  { path: 'formulario-envio', component: FormularioEnvioComponent },
  { path: 'confirmar-envio', component: ConfirmarEnvioComponent },
  { path: 'pago-envio', component: PagoEnvioComponent },
  { path: 'generar-informe-contable' , component: GenerarInformeContableComponent},
<<<<<<< HEAD
  { path: 'generar-informe-contable-show' , component:GenerarInformeContableShowComponent}
=======
  { path: 'controlde-calidad', component: ControldeCalidadComponent}

>>>>>>> 18a2c386590f1db29e05ced122067e9fb0fb3454

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
