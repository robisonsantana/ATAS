import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  horaInicio: string = '';
  horaFim: string = '';
  diaSemana: string = '';

  // radio buttons
  modalidade: string = '';
  tipo: string = '';

  // estados
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  // opçoes de disciplina (depois alterar pra apenas as disciplinas cadastradas)
  disciplinas: Disciplina[] = [
    { id: 1, nome: 'Matemática' },
    { id: 2, nome: 'Português' },
    { id: 3, nome: 'História' },
    { id: 4, nome: 'Geografia' },
    { id: 5, nome: 'Ciências' },
    { id: 6, nome: 'Inglês' },
    { id: 7, nome: 'Educação Física' },
    { id: 8, nome: 'Artes' }
  ];

  turnos: Turno[] = [
    { id: 'manha', nome: 'Manhã' },
    { id: 'tarde', nome: 'Tarde' },
    { id: 'noite', nome: 'Noite' }
  ];

  constructor(private router: Router) {}

  private clearForm() {
    this.disciplinaSelecionada = '';
    this.turnoSelecionado = '';
    this.horaInicio = '';
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

  onEnviar() {
    const editalData = {
      //disciplinaSelecionada: this.disciplinaSelecionada,
      turnoSelecionado: this.turnoSelecionado,
      horaInicio: this.horaInicio,
      horaFim: this.horaFim,
      diaSemana: this.diaSemana,
      //modalidade: this.modalidade,
      tipo: this.tipo,
      dataCriacao: new Date().toISOString().split('T')[0],

    }
  }
}
