import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


//depois tem que arrumar isso...
interface Solicitacao {
  id: number;
  titulo: string;
  numeroEdital: string;
  disciplina: string;
  dataSolicitacao: Date;
  status: string;
}

@Component({
  selector: 'app-solicitacoes-coordenador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacoes-coordenador.html',
  styleUrl: './solicitacoes-coordenador.css'
})
export class SolicitacoesCoordenadorComponent implements OnInit {
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
