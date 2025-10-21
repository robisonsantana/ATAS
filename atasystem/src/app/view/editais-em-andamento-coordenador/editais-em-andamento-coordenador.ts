import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Edital } from '../../classes/edital/edital';


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
  selector: 'app-editais-em-andamento-coordenador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editais-em-andamento-coordenador.html',
  styleUrl: './editais-em-andamento-coordenador.css'
})
export class EditaisEmAndamentoCoordenador implements OnInit {
  editais: Edital[] = [];
  loading: boolean = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.carregarEditais();
  }

  carregarEditais() {
    this.loading = true;

    // dados mockados - substituir por chamada ao backend
    this.editais = [
      {
        id: 1,
        titulo: 'Edital 001/2024 - Engenharia de Software',
        numeroEdital: '001/2024',
        candidatos: [],
        disciplina: 'Engenharia de Software',
        status: 'Em andamento',
        dataAbertura: new Date('2024-05-01'),
        modalidade: 'Presencial',
        ano: 2025
      },
      {
        id: 2,
        titulo: 'Edital 002/2025 - Banco de Dados',
        numeroEdital: '002/2024',
        candidatos: [],
        disciplina: 'Banco de Dados',
        status: 'Em Análise',
        dataAbertura: new Date('2024-06-15'),
        modalidade: 'EAD',
        ano: 2024
      },
      {
        id: 3,
        titulo: 'Edital 003/2025 - Redes de Computadores',
        numeroEdital: '003/2025',
        candidatos: [],
        disciplina: 'Redes de Computadores',
        status: 'Em andamento',
        dataAbertura: new Date('2024-06-15'),
        modalidade: 'Presencial',
        ano: 2025
      }
    ];

    this.editais = this.editais.filter(edital => 
    edital.status.toLowerCase() === 'Em andamento'.toLowerCase()
  );

    this.loading = false;
  }

  visualizarEdital(edital: Edital) {
    console.log('Navegando para a tela de abrir edital:', edital);
    // navegar para tela de detalhes ou abrir modal (depois vejo isso no back)
    this.router.navigate(['/abrir-edital', edital.id]);
  }

  getStatusClass(status: string): string {
  const statusLower = status.toLowerCase();
  
  switch (statusLower) {
    case 'em andamento':
      return 'status-aberto';
    case 'aprovada':
      return 'status-aprovada';
    case 'pendente':
      return 'status-pendente';
    case 'em análise':
    case 'em analise':
      return 'status-analise';
    case 'rejeitada':
    case 'fechado':
      return 'status-rejeitada';
    default:
      return '';
  }
}

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }
}
