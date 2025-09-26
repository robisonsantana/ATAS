import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private http = inject(HttpClient);

  testBackend() {
    console.log('iniciando teste de conexao...');

    this.http.get('http://localhost:8080/')
      .subscribe({
        next: res => {
          console.log('sucesso - resposta do backend:', res);
        },
        error: err => {
          console.error('erro na conexão:', err);
        }
      });
  }
}
