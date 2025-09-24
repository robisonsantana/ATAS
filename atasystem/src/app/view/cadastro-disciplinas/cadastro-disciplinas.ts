import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  // estados
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onEnviar() {
    // verificaçoes
    if (!this.disciplina.trim()) {
      this.errorMessage = 'Nome da disciplina é obrigatório';
      return;
    }

    if (!this.curso.trim()) {
      this.errorMessage = 'Curso é obrigatório';
      return;
    }

    if (!this.objetivo.trim()) {
      this.errorMessage = 'Objetivo é obrigatório';
      return;
    }

    if (!this.ementa.trim()) {
      this.errorMessage = 'Ementa é obrigatória';
      return;
    }

    if (!this.descricao.trim()) {
      this.errorMessage = 'Descrição é obrigatória';
      return;
    }

    if (!this.turno) {
      this.errorMessage = 'Selecione um turno';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    // criar objeto da disciplina (provavelmente vai ser substituido quando conectar com o back)
    const novaDisciplina = {
      disciplina: this.disciplina.trim(),
      curso: this.curso.trim(),
      objetivo: this.objetivo.trim(),
      ementa: this.ementa.trim(),
      descricao: this.descricao.trim(),
      turno: this.turno,
      dataCriacao: new Date()
    };

    console.log('Nova disciplina:', novaDisciplina);

    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Disciplina cadastrada com sucesso!';
      
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }, 1500);
  }

  onLimpar() {
    this.disciplina = '';
    this.curso = '';
    this.objetivo = '';
    this.ementa = '';
    this.descricao = '';
    this.turno = '';
    this.errorMessage = '';
    this.successMessage = '';
  }

  clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }
}