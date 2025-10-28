import { Component } from '@angular/core';
import { Edital } from '../../classes/edital/edital';
import { Candidato } from '../../classes/candidato/candidato';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avaliacao-candidatos',
  imports: [FormsModule, CommonModule],
  templateUrl: './avaliacao-candidatos.html',
  styleUrl: './avaliacao-candidatos.css',
})

export class AvaliacaoCandidatos {
  editalSelecionado: Edital = new Edital(
    1,
    'Edital 001/2024 - Engenharia de Software',
    '001/2024',
    [
      new Candidato('Marcos', '12345678904', 'MG1234571', 'Motivo Teste32', 28, ['doc7.pdf', 'doc10.pdf', 'doc11.pdf']),
      new Candidato('Beatriz', '12345678905', 'MG1234572', 'Motivo Teste33', 29, ['doc8.pdf', 'doc12.pdf', 'doc13.pdf']),
      new Candidato('Renan', '12345678906', 'MG1234573', 'Motivo Teste34', 27, ['doc9.pdf', 'doc14.pdf', 'doc15.pdf']),
    ],
    'Engenharia de Software',
    'Aberto',
    new Date('2024-05-01'),
    'Presencial',
    2025
  );

  candidatoSelecionado?: Candidato;

  // Método para selecionar o candidato
  selecionarCandidato(candidato: Candidato) {
    this.candidatoSelecionado = candidato;
  }
}
