import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  notificationCount = 3;
  pageTitle = 'Menu Principal'; // esse e o titulo padrao

  // mapeamento das rotas pra titulo no header
  private routeTitleMap: { [key: string]: string } = {
    '/login': 'Login',
    '/dashboard': 'Menu Principal',
    '/avaliacao-candidatos': 'Avaliação de Candidatos',
    '/editar-ata': 'Editar ATA',
    '/solicitar-edital': 'Solicitar Edital',
    '/cadastro-disciplinas': 'Cadastro de Disciplinas',
    '/analisar-recursos': 'Analisar Recursos',
    '/montar-banca': 'Montar Banca',
    '/register': 'Cadastrar Usuário'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTitle(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateTitle(event.url);
      });
  }

  private updateTitle(url: string) {
    this.pageTitle = this.routeTitleMap[url] || 'Menu Principal';
  }

  private updateLoginButton (url: string){
    if (this.pageTitle == 'Login') {
      
    }
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onNotificationClick() {
    console.log('Notifications clicked');
  }
}
