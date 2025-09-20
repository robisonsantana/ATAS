import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SubMenuItem {
  title: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subheader.html',
  styleUrl: './subheader.css'
})

export class SubHeaderComponent implements OnInit {
  currentRoute = '';

  menuItems: SubMenuItem[] = [
    {
      title: 'Solicitar Edital',
      route: '/solicitar-edital'
    },
    {
      title: 'Editar ATA',
      route: '/editar-ata'
    },
    {
      title: 'Avaliação de Candidatos',
      route: '/avaliacao-candidatos'
    },
    {
      title: 'Montar Banca',
      route: '/montar-banca'
    },
    {
      title: 'Cadastro de Disciplinas',
      route: '/cadastro-disciplinas'
    },
    {
      title: 'Analisar Recursos',
      route: '/analisar-recursos'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.updateActiveItem();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        this.updateActiveItem();
      });
  }

  private updateActiveItem() {
    this.menuItems.forEach(item => {
      item.active = item.route === this.currentRoute;
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // nao mostrar em login e cadastro
  shouldShow(): boolean {
    return !this.currentRoute.includes('/login') && 
           !this.currentRoute.includes('/register') &&
           !this.currentRoute.includes('/dashboard');
  }
}
