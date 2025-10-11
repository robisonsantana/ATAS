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
    new Edital(
      1,
      [
        new Candidato('Aline', '12345678900', 'MG1234567', 'Motivo Teste', 10, [
          'doc1.pdf',
          'doc2.pdf',
        ]),
        new Candidato('Tiago', '12345678901', 'MG1234568', 'Motivo Teste 2', 8, ['doc3.pdf']),
        new Candidato('Carlos', '12345678902', 'MG1234569', 'Motivo Teste 3', 9, ['doc4.pdf']),
      ],
      'Edital 1'
    ),

    new Edital(
      2,
      [
        new Candidato('Clarisse', '12345678902', 'MG1234569', 'Motivo Teste2', 20, [
          'doc3.pdf',
          'doc4.pdf',
        ]),
        new Candidato('Bruno', '12345678901', 'MG1234568', 'Motivo Teste22', 18, ['doc1.pdf']),
        new Candidato('Ana', '12345678900', 'MG1234567', 'Motivo Teste32', 19, ['doc2.pdf']),
      ],
      'Edital 2'
    ),

    new Edital(
      3,
      [
        new Candidato('Luara', '12345678903', 'MG1234570', 'Motivo Teste3', 30, [
          'doc5.pdf',
          'doc6.pdf',
        ]),
        new Candidato('Marcos', '12345678904', 'MG1234571', 'Motivo Teste32', 28, ['doc7.pdf']),
        new Candidato('Beatriz', '12345678905', 'MG1234572', 'Motivo Teste33', 29, ['doc8.pdf']),
        new Candidato('Renan', '12345678906', 'MG1234573', 'Motivo Teste34', 27, ['doc9.pdf']),
      ],
      'Edital 3'
    ),
  ];

}
