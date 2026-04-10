import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiUrl = 'http://localhost:8080/candidatos';

  constructor(private http: HttpClient) {}

  testarConexao(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  findAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  findByName(nome: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?nome=${nome}`);
  }
  
}
