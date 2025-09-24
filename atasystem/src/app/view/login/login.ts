import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login attempt:', { email: this.email, password: this.password });
  }

  onMicrosoftLogin() {
    console.log('Microsoft login clicked');
  }

  onGoogleLogin() {
    console.log('Google login clicked');
  }

  onRegister() {
    console.log('Register clicked');
    this.router.navigate(['/register']); 
  }
}
