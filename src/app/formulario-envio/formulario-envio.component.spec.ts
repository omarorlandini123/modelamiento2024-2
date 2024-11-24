import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.scss']
})
export class FormularioEnvioComponent {
  // Controlamos el paso actual del formulario
  step: number = 1; // 1 = Formulario de Envío, 2 = Formulario de Pago

  // Función que cambia al siguiente paso (Formulario de Pago)
  nextStep() {
    if (this.step === 1) {
      this.step = 2; // Cambia al formulario de pago
    }
  }
}
