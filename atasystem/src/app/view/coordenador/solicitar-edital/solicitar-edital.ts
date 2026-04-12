import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EditalService } from '../../../services/edital/edital.service';

interface Disciplina {
  id: number;
  disciplina: string; 
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
  disciplinaSelecionada: number | null = null;
  turnoSelecionado: string = '';
  horaInicio: string = '';
  horaFim: string = '';

  // radio buttons
  modalidade: string = '';
  tipo: string = '';

  // estados
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  // alterado para puxar do back
  disciplinas: Disciplina[] = [];

  turnos: Turno[] = [
    { id: 'manha', nome: 'Manhã' },
    { id: 'tarde', nome: 'Tarde' },
    { id: 'noite', nome: 'Noite' }
  ];

  constructor(
    private router: Router,
    private editalService: EditalService
  ) {}

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

    if (!this.horaInicio) {
      this.errorMessage = 'Informe o horário';
      return;
    }

    if (!this.diasSemana.length) {
      this.errorMessage = 'Selecione o dia da semana';
      return;
    }

    if (!this.tipo) {
      this.errorMessage = 'Selecione o tipo';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const dto = {
      nome: `Edital ${new Date().getFullYear()}`, // pode ajustar depois
      disciplinaId: this.disciplinaSelecionada,
      curso: 'ADS', // pode vir de outro lugar depois
      tipo: this.tipo,
      turno: this.turnoSelecionado.toUpperCase(), 
      horario: `${this.horaInicio} - ${this.horaFim}`,
      diasSemana: this.diasSemana.map(d => d.toUpperCase())
    };

    console.log('Solicitação de edital:', dto);

    this.editalService.solicitarEdital(dto).subscribe({
      next: (res) => {
        this.loading = false;
        this.successMessage = 'Solicitação enviada com sucesso!';

        this.clearForm();

        console.log('Resposta do backend:', res);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Erro ao enviar solicitação';

        console.error(err);
      }
});
  }

  private clearForm() {
    this.disciplinaSelecionada = null;    
    this.turnoSelecionado = '';
    this.horaInicio = '';
    this.diasSemana = [];
    this.modalidade = '';
    this.tipo = '';
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  diasSemana: string[] = [];
  diasDisponiveis: string[] = [
    'SEGUNDA',
    'TERCA',
    'QUARTA',
    'QUINTA',
    'SEXTA',
    'SABADO'  
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

  ngOnInit() {
    this.editalService.getDisciplinas().subscribe({
      next: (res) => {
        this.disciplinas = res;
        console.log('Disciplinas do banco:', res);
      },
      error: (err) => {
        console.error('Erro ao buscar disciplinas', err);
      }
    });
  }
}
