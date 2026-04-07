import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-edital-menu',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './edital-menu.html',
  styleUrl: './edital-menu.css'
})
export class EditalMenuComponent {
menuItems: MenuItem[] = [
    {
      title: 'Avaliação de Candidatos',
      route: '/avaliacao-candidatos'
    },
    {
      title: 'Montar Banca',
      route: '/montar-banca'
    },
    {
      title: 'Gerenciamento de Pontuações',
      route: '/gerenciar-pontos'
    },
    {
      title: 'Criar ATA / Editar ATA',
      route: '/criar-ata'
    }
  ]

  constructor(private router: Router) {}

  navigateTo(route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
  }
}
