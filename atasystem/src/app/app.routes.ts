import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard';
import { RegisterComponent  } from "./view/register/register";
import { SolicitarEditalComponent } from './view/solicitar-edital/solicitar-edital';
import { CadastroDisciplinasComponent } from './view/cadastro-disciplinas/cadastro-disciplinas';
import { EditarAtaComponent } from "./view/editar-ata/editar-ata";
import { MontarBancaComponent } from './view/montar-banca/montar-banca';
import { LoginComponent } from './view/login/login';
import { AvaliacaoCandidatos } from './view/avaliacao-candidatos/avaliacao-candidatos';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'avaliacao-candidatos', component: AvaliacaoCandidatos },
  { path: 'editar-ata', component: EditarAtaComponent }, 
  { path: 'solicitar-edital', component: SolicitarEditalComponent }, 
  { path: 'cadastro-disciplinas', component: CadastroDisciplinasComponent }, 
  { path: 'analisar-recursos', component: DashboardComponent }, 
  { path: 'montar-banca', component: MontarBancaComponent }, 
  { path: '**', redirectTo: '/login' } // rota coringa para paginas nao encontradas
];