import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DisciplinaService } from '../../services/disciplina.service';

@Component({
  selector: 'app-cadastro-disciplinas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-disciplinas.html',
  styleUrls: ['./cadastro-disciplinas.css']
})
export class CadastroDisciplinasComponent {
  disciplina: string = '';
  curso: string = '';
  objetivo: string = '';
  ementa: string = '';
  descricao: string = '';
  turno: string = '';
   modalidade: string = '';

  //checkboxes
  turnoManha: boolean = false;
  turnoTarde: boolean = false;
  turnoNoite: boolean = false;

  //modelo dropdown
  modeloDisciplina: string = '';
  modelosDisponiveis: string[] = ['Presencial', 'Híbrido', 'Online'];

  diasSemana: string[] = [];
  diasDisponiveis: string[] = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ];

  quantidadeAulas: number = 1; //1 a 4
  aulasOpcoes: number[] = [1, 2, 3, 4];

  // estados
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private disciplinaService: DisciplinaService) {}

  toggleDiaSemana(dia: string) {
    const index = this.diasSemana.indexOf(dia);
    if (index > -1) {
      this.diasSemana.splice(index, 1);
    } else {
      this.diasSemana.push(dia);
    }
  }

  isDiaSelecionado(dia: string): boolean {
    return this.diasSemana.includes(dia);
  }

  onEnviar() {
    const disciplinaData = {
      disciplina: this.disciplina,
      curso: this.curso,
      modeloDisciplina: this.modeloDisciplina,
      quantidadeAulas: this.quantidadeAulas,
      ementa: this.ementa,
      descricao: this.descricao,
      objetivo: this.objetivo,
      turnoManha: this.turnoManha,
      turnoTarde: this.turnoTarde,
      turnoNoite: this.turnoNoite,
      diasSemana: this.diasSemana,
      dataCriacao: new Date().toISOString().split('T')[0]
    };

    console.log('Dados sendo enviados:', disciplinaData);

    this.disciplinaService.salvarDisciplina(disciplinaData).subscribe({
      next: (response) => {
        console.log('Sucesso:', response);
        this.successMessage = 'Disciplina cadastrada com sucesso!';
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro completo:', error);
        this.errorMessage = 'Erro ao cadastrar disciplina';
        this.loading = false;
      }
    });
  }



  onLimpar() {
    this.disciplina = '';
    this.curso = '';
    this.objetivo = '';
    this.ementa = '';
    this.descricao = '';
    this.turnoManha = false;
    this.turnoTarde = false;
    this.turnoNoite = false;
    this.modeloDisciplina = '';
    this.diasSemana = [];
    this.quantidadeAulas = 1;
    this.errorMessage = '';
    this.successMessage = '';
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }
}
