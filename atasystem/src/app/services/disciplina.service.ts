import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Disciplina {
  id?: number;
  disciplina: string;
  curso: string;
  modeloDisciplina: string;
  quantidadeAulas: number;
  ementa: string;
  descricao: string;
  objetivo: string;
  turnoManha: boolean;
  turnoTarde: boolean;
  turnoNoite: boolean;
  diasSemana?: string[];
  dataCriacao?: string;
}

@Injectable({ providedIn: 'root' })
export class DisciplinaService {
  private apiUrl = 'http://localhost:8080/cadastro-disciplina';


  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  testarConexao(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`, {
      responseType: 'text'
    });
  }

  salvarDisciplina(disciplina: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, disciplina, { headers })
      .pipe(
        catchError(error => {
          console.error('Erro detalhado:', error);
          return throwError(() => new Error('Erro ao salvar disciplina'));
        })
      );
  }

  listarDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.apiUrl}/listar`, this.httpOptions);
  }
}
