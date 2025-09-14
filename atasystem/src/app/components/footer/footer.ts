import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerItems = [
    'ATAS',
    'Anthony Oliveira',
    'Brenda Santana',
    'Celline Bitencourt',
    'Robison Santana'
  ];
}