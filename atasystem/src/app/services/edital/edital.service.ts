import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface SolicitarEditalDTO {
  nome: string;
  disciplinaId?: number;
  disciplinaNome?: string;
  curso?: string;
  tipo?: string;
  turno?: string;
  horario?: string;
  diasSemana: string[];
}

@Injectable({
  providedIn: 'root'
})

export class EditalService {

    private api = 'http://localhost:8080/edital';

    constructor(private http: HttpClient) {}

    //endpoints
    solicitarEdital(dto: SolicitarEditalDTO): Observable<any> {
        return this.http.post(`${this.api}/solicitar-edital`, dto);
    }

    listarSolicitados(): Observable<any[]> {
        return this.http.get<any[]>(`${this.api}/solicitados`);
    }

    aprovar(id: number): Observable<any> {
        return this.http.put(`${this.api}/${id}/aprovar`, {});
    }

    getDisciplinas() {
        return this.http.get<any[]>('http://localhost:8080/disciplina');
    }
}