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

  editalSelecionado?: Edital;

  editais: Edital[] = [
    new Edital(1, 'Edital 001/2024 - Engenharia de Software', '001/2024', [
        new Candidato('Marcos', '12345678904', 'MG1234571', 'Motivo Teste32', 28, ['doc7.pdf']),
        new Candidato('Beatriz', '12345678905', 'MG1234572', 'Motivo Teste33', 29, ['doc8.pdf']),
        new Candidato('Renan', '12345678906', 'MG1234573', 'Motivo Teste34', 27, ['doc9.pdf'])], 
        'Engenharia de Software', 'Aberto', new Date('2024-05-01')),
    new Edital(2, 'Edital 002/2025 - Banco de Dados', '002/2024', [
        new Candidato('Ana', '12345678901', 'MG1234568', 'Motivo Teste1', 25, ['doc1.pdf', 'doc2.pdf']),
        new Candidato('Bruno', '12345678902', 'MG1234569', 'Motivo Teste2', 27, ['doc3.pdf', 'doc4.pdf'])], 
        'Banco de Dados', 'Em Análise', new Date('2024-06-15')),
    new Edital(3, 'Edital 003/2024 - Redes de Computadores', '003/2024', [
        new Candidato('Carla', '12345678907', 'MG1234574', 'Motivo Teste35', 26, ['doc10.pdf']),
        new Candidato('Diego', '12345678908', 'MG1234575', 'Motivo Teste36', 24, ['doc11.pdf'])],
        'Redes de Computadores', 'Aberto', new Date('2024-07-20'))
  ]

}
