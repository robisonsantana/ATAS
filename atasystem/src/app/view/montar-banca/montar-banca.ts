import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-montar-banca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './montar-banca.html',
  styleUrl: './montar-banca.css'
})

export class MontarBancaComponent {
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
    
    console.log('Banca cadastrada:', this.professoresComissao);
  }

  limpar() {
    this.professoresDisponiveis = [
      ...this.professoresDisponiveis,
      ...this.professoresComissao
    ];
    this.professoresComissao = [];
    this.selectedDisponiveis = [];
    this.selectedComissao = [];
  }
}
