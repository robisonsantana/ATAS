import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { RegisterComponent  } from "./components/register/register";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'avaliacao-candidatos', component: DashboardComponent },
  { path: 'editar-ata', component: DashboardComponent }, 
  { path: 'solicitar-edital', component: DashboardComponent }, 
  { path: 'cadastro-disciplinas', component: DashboardComponent }, 
  { path: 'analisar-recursos', component: DashboardComponent }, 
  { path: 'montar-banca', component: DashboardComponent }, 
  { path: '**', redirectTo: '/login' } // rota coringa para paginas nao encontradas
];