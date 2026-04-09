import { Component } from '@angular/core';
import { Edital } from '../../../classes/edital/edital';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abrir-edital',
  imports: [FormsModule],
  templateUrl: './abrir-edital.html',
  styleUrl: './abrir-edital.css'
})
export class AbrirEdital {

  public editalSolicitado:  Edital = new Edital(
    1, 
    'Edital 2003/2025 - Banco de Dados',
    '2003/2025',
    [],
    'Banco de Dados',
    'Em Análise',
    new Date(),
    'Presencial',
    2025
  );

  public abrirEdital() {
    console.log('Edital solicitado:', this.editalSolicitado);
    // Lógica para enviar o edital para o backend ou processá-lo conforme necessário
  }

}
