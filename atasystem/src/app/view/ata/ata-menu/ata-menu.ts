import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-ata-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ata-menu.html',
  styleUrl: './ata-menu.css'
})
export class AtaMenuComponent {

  menuItems: MenuItem[] = [
      {
        title: 'Ver Solicitações Abertas',
        route: '/solicitacoes-abertas-ata'
      }
    ]
  
    constructor(private router: Router) {}
  
    navigateTo(route: string) {
      console.log('Navigating to:', route);
      this.router.navigate([route]);
    }

}
