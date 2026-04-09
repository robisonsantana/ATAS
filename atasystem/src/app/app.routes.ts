import { Routes } from '@angular/router';

import { RegisterComponent  } from "./view/authentication/register/register";
import { SolicitarEditalComponent } from './view/coordenador/solicitar-edital/solicitar-edital';
import { CadastroDisciplinas } from './view/coordenador/cadastro-disciplinas/cadastro-disciplinas';
import { EditarAta } from "./view/coordenador/editar-ata/editar-ata";
import { MontarBancaComponent } from './view/edital/montar-banca/montar-banca';
import { LoginComponent } from './view/authentication/login/login';
import { AvaliacaoCandidatos } from './view/coordenador/avaliacao-candidatos/avaliacao-candidatos';
import { AvaliacaoBanca } from './view/edital/avaliacao-banca/avaliacao-banca';
import { CoordenadorMenuComponent } from './view/coordenador/coordenador-menu/coordenador-menu';
import { AtaMenuComponent } from './view/ata/ata-menu/ata-menu';
import { EditalMenuComponent } from './view/edital/edital-menu/edital-menu';
import { SolicitacoesComponent } from './view/ata/solicitacoes/solicitacoes';
import { SolicitacoesCoordenadorComponent } from './view/coordenador/solicitacoes-coordenador/solicitacoes-coordenador';
import { EditaisEmAndamentoCoordenador } from './view/coordenador/editais-em-andamento-coordenador/editais-em-andamento-coordenador';
import { AbrirEdital } from './view/ata/abrir-edital/abrir-edital';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'avaliacao-candidatos', component: AvaliacaoCandidatos },
  { path: 'editar-ata', component: EditarAta }, 
  { path: 'solicitar-edital', component: SolicitarEditalComponent }, 
  { path: 'cadastro-disciplinas', component: CadastroDisciplinas }, 
  { path: 'analisar-recursos', component: LoginComponent }, 
  { path: 'montar-banca', component: MontarBancaComponent }, 
  { path: 'avaliacao-banca', component: AvaliacaoBanca  },
  { path: 'coordenador-menu', component: CoordenadorMenuComponent },
  { path: 'ata-menu', component: AtaMenuComponent},
  { path: 'edital-menu', component: EditalMenuComponent},
  // { path: 'editais-anteriores', },
  { path: 'solicitacoes-abertas-coordenador', component:SolicitacoesCoordenadorComponent },
  { path: 'solicitacoes-abertas-ata', component: SolicitacoesComponent},
  { path: 'editais-em-andamento-coordenador', component: EditaisEmAndamentoCoordenador },
  { path: 'abrir-edital', component: AbrirEdital },
  // { path: 'editais-andamento',  },
  { path: '**', redirectTo: '/login' } // rota coringa para paginas nao encontradas
];