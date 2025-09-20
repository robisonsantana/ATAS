import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class RegisterComponent {
  ra: string = '';
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log('Register attempt:', {
      ra: this.ra,
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      senha: this.senha
    });
    
    if (this.ra && this.nome && this.sobrenome && this.email && this.senha) {
      console.log("login bem sucedido")
      this.router.navigate(['/login']);
    }
  }

  onMicrosoftRegister() {
    console.log('Microsoft register clicked');
  }

  onGoogleRegister() {
    console.log('Google register clicked');
  }
}
