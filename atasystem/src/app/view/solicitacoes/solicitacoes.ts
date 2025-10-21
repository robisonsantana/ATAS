import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

//depois tem que arrumar isso... verificar se os valores sao esses
interface Solicitacao {
  id: number;
  titulo: string;
  numeroEdital: string;
  disciplina: string;
  dataSolicitacao: Date;
  status: string;
}

@Component({
  selector: 'app-solicitacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacoes.html',
  styleUrl: './solicitacoes.css'
})

export class SolicitacoesComponent implements OnInit {
  solicitacoes: Solicitacao[] = [];
  loading: boolean = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.carregarSolicitacoes();
  }

  carregarSolicitacoes() {
    this.loading = true;

    // dados mockados - substituir por chamada ao backend
    this.solicitacoes = [
      {
        id: 1,
        titulo: 'Solicitação de abertura do Edital 111-092024',
        numeroEdital: '111-092024',
        disciplina: 'Matemática Aplicada',
        dataSolicitacao: new Date('2024-09-15'),
        status: 'Pendente'
      },
      {
        id: 2,
        titulo: 'Solicitação de abertura do Edital 112-092024',
        numeroEdital: '112-092024',
        disciplina: 'Programação Web',
        dataSolicitacao: new Date('2024-09-16'),
        status: 'Em Análise'
      },
      {
        id: 3,
        titulo: 'Solicitação de abertura do Edital 113-092024',
        numeroEdital: '113-092024',
        disciplina: 'Banco de Dados',
        dataSolicitacao: new Date('2024-09-17'),
        status: 'Aprovada'
      },
      {
        id: 4,
        titulo: 'Solicitação de abertura do Edital 114-092024',
        numeroEdital: '114-092024',
        disciplina: 'Engenharia de Software',
        dataSolicitacao: new Date('2024-09-18'),
        status: 'Pendente'
      },
      {
        id: 5,
        titulo: 'Solicitação de abertura do Edital 115-092024',
        numeroEdital: '115-092024',
        disciplina: 'Redes de Computadores',
        dataSolicitacao: new Date('2024-09-19'),
        status: 'Em Análise'
      }
    ];

    this.loading = false;
  }

  visualizarSolicitacao(solicitacao: Solicitacao) {
    console.log('Navegando para a tela de abrir edital:', solicitacao);
    // navegar para tela de detalhes ou abrir modal (depois vejo isso no back)
    this.router.navigate(['/abrir-edital', solicitacao.id]);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'aprovada':
        return 'status-aprovada';
      case 'pendente':
        return 'status-pendente';
      case 'em análise':
        return 'status-analise';
      case 'rejeitada':
        return 'status-rejeitada';
      default:
        return '';
    }
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }
}
