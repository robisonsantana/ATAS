import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { RegisterComponent  } from "./components/register/register";
import { SolicitarEditalComponent } from './components/solicitar-edital/solicitar-edital';
import { CadastroDisciplinasComponent } from './components/cadastro-disciplinas/cadastro-disciplinas';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'avaliacao-candidatos', component: DashboardComponent },
  { path: 'editar-ata', component: DashboardComponent }, 
  { path: 'solicitar-edital', component: SolicitarEditalComponent }, 
  { path: 'cadastro-disciplinas', component: CadastroDisciplinasComponent }, 
  { path: 'analisar-recursos', component: DashboardComponent }, 
  { path: 'montar-banca', component: DashboardComponent }, 
  { path: '**', redirectTo: '/login' } // rota coringa para paginas nao encontradas
];