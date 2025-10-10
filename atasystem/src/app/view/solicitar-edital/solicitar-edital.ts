import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {DisciplinaService} from '../../services/disciplina.service';

interface Disciplina {
  id: number;
  nome: string;
}

interface Turno {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-solicitar-edital',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitar-edital.html',
  styleUrls: ['./solicitar-edital.css']
})

export class SolicitarEditalComponent {
  // dados do formulário
  disciplinaSelecionada: string = '';
  turnoSelecionado: string = '';
  horario: string = '';
  diaSemana: string = '';

  // radio buttons
  modalidade: string = '';
  tipo: string = '';

  // estados
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  disciplinas: Disciplina[] = [];

  turnos: Turno[] = [
    { id: 'manha', nome: 'Manhã' },
    { id: 'tarde', nome: 'Tarde' },
    { id: 'noite', nome: 'Noite' }
  ];

  constructor(
    private router: Router,
    private disciplinaService: DisciplinaService
  ) {}

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    this.loading = true;
    this.disciplinaService.listarDisciplinas().subscribe({
      next: (disciplinas) => {
        this.disciplinas = disciplinas;
        this.loading = false;
        console.log('Disciplinas carregadas:', disciplinas);
      },
      error: (error) => {
        console.error('Erro ao carregar disciplinas:', error);
        this.errorMessage = 'Erro ao carregar disciplinas do servidor';
        this.loading = false;
      }
    });
  }

  onSubmit() {
    // verificaçoes
    if (!this.disciplinaSelecionada) {
      this.errorMessage = 'Selecione o nome da disciplina';
      return;
    }

    if (!this.turnoSelecionado) {
      this.errorMessage = 'Selecione o turno';
      return;
    }

    if (!this.horario) {
      this.errorMessage = 'Informe o horário';
      return;
    }

    if (!this.diaSemana) {
      this.errorMessage = 'Selecione o dia da semana';
      return;
    }

    if (!this.modalidade) {
      this.errorMessage = 'Selecione a modalidade';
      return;
    }

    if (!this.tipo) {
      this.errorMessage = 'Selecione o tipo';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const solicitacao = {
      disciplina: this.disciplinaSelecionada,
      turno: this.turnoSelecionado,
      horario: this.horario,
      diaSemana: this.diaSemana,
      modalidade: this.modalidade,
      tipo: this.tipo,
      dataEnvio: new Date()
    };

    console.log('Solicitação de edital:', solicitacao);

    // simular delay da API
    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Solicitação enviada com sucesso!';

      setTimeout(() => {
        this.clearForm();
        this.successMessage = '';
      }, 2000);
    }, 1500);
  }

  private clearForm() {
    this.disciplinaSelecionada = '';
    this.turnoSelecionado = '';
    this.horario = '';
    this.diaSemana = '';
    this.modalidade = '';
    this.tipo = '';
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  diasSemana: string[] = [];
  diasDisponiveis: string[] = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ];

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
}
