import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class DashboardComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Avaliação de Candidatos',
      route: '/avaliacao-candidatos'
    },
    {
      title: 'Editar ATA',
      route: '/editar-ata'
    },
    {
      title: 'Solicitar Edital',
      route: '/solicitar-edital'
    },
    {
      title: 'Cadastro de Disciplinas',
      route: '/cadastro-disciplinas'
    },
    {
      title: 'Analisar Rescursos',
      route: '/analisar-recursos'
    },
    {
      title: 'Montar Banca',
      route: '/montar-banca'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    console.log('Navigating to:', route);
  }
}
