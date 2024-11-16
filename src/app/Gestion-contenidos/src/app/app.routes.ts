import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { GestionContenidosComponent } from './gestion-contenidos/gestion-contenidos.component';
import { AnadirContenidosComponent } from './anadir-contenidos/anadir-contenidos.component';
import { EditarContenidosComponent } from './editar-contenidos/editar-contenidos.component'; // Importar el componente de edición
import { ApplicationConfig } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

// Definir las rutas
export const routes: Routes = [
    { path: '', component: GestionContenidosComponent },
    { path: 'anadir-contenidos', component: AnadirContenidosComponent },
    { path: 'editar-contenidos', component: EditarContenidosComponent }, // Agregar la ruta para EditarComponente
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withDebugTracing())]
};

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export class OtroComponente {
    constructor(private router: Router) {}

    abrirAnadirContenido() {
        this.router.navigate(['/anadir-contenidos']);
    }

    abrirEditarComponente() {
        this.router.navigate(['/editar-contenidos']); // Navegar al componente de edición
    }
}
