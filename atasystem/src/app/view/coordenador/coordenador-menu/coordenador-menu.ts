import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-coordenador-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coordenador-menu.html',
  styleUrl: './coordenador-menu.css'
})
export class CoordenadorMenuComponent {

  menuItems: MenuItem[] = [
    {
      title: 'Solicitar Abertura de Edital',
      route: '/solicitar-edital'
    },
    {
      title: 'Ver Editais Anteriores',
      route: '/editais-anteriores'
    },
    {
      title: 'Ver Solicitações Abertas',
      route: '/solicitacoes-abertas-coordenador'
    },
    {
      title: 'Visualizar Editais em Andamento',
      route: '/editais-andamento'
    }
  ]

  constructor(private router: Router) {}

  navigateTo(route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
  }

}
