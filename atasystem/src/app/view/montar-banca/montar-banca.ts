import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Edital {
  id: string;
  numero: string;
  ano: number;
  semestre: number;
}

@Component({
  selector: 'app-montar-banca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './montar-banca.html',
  styleUrl: './montar-banca.css'
})

export class MontarBancaComponent {
  editaisAbertos: Edital[] = [
    { id: '1', numero: 'edital 000001', ano: 2024, semestre: 1 },
    { id: '3', numero: 'edital 000003', ano: 2024, semestre: 2 },
    { id: '5', numero: 'edital 000005', ano: 2024, semestre: 2 },
    { id: '7', numero: 'edital 000007', ano: 2024, semestre: 1 }
  ];

  editalSelecionado: string = '';

  professoresDisponiveis: string[] = [
    'Prof. João - Doutor',
    'Prof. Maria - Mestre',
    'Prof. Pedro - Doutor',
    'Prof. Ana - Mestre'
  ];

  professoresComissao: string[] = [];

  selectedDisponiveis: string[] = [];
  selectedComissao: string[] = [];

  moverParaComissao() {
    this.selectedDisponiveis.forEach(prof => {
      if (!this.professoresComissao.includes(prof)) {
        this.professoresComissao.push(prof);
      }
      this.professoresDisponiveis = this.professoresDisponiveis.filter(p => p !== prof);
    });
    this.selectedDisponiveis = [];
  }

  moverTodosParaComissao() {
    this.professoresComissao = [...this.professoresComissao, ...this.professoresDisponiveis];
    this.professoresDisponiveis = [];
    this.selectedDisponiveis = [];
  }

  removerDaComissao() {
    this.selectedComissao.forEach(prof => {
      if (!this.professoresDisponiveis.includes(prof)) {
        this.professoresDisponiveis.push(prof);
      }
      this.professoresComissao = this.professoresComissao.filter(p => p !== prof);
    });
    this.selectedComissao = [];
  }

  removerTodosDaComissao() {
    this.professoresDisponiveis = [...this.professoresDisponiveis, ...this.professoresComissao];
    this.professoresComissao = [];
    this.selectedComissao = [];
  }

  cadastrarBanca() {
    if (!this.editalSelecionado) {
      alert('Por favor, selecione um edital antes de cadastrar a banca.');
      return;
    }
    if (this.professoresComissao.length === 0) {
      alert('Por favor, adicione pelo menos um professor à comissão.');
      return;
    }
    console.log('Banca cadastrada para o edital:', this.editalSelecionado);
    console.log('Professores da comissão:', this.professoresComissao);
  }

  limpar() {
    this.professoresDisponiveis = [
      ...this.professoresDisponiveis,
      ...this.professoresComissao
    ];
    this.professoresComissao = [];
    this.selectedDisponiveis = [];
    this.selectedComissao = [];
    this.editalSelecionado = '';
  }
}
