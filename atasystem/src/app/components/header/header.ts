import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  notificationCount = 3;

  onLogin() {
    console.log('Login clicked');
  }

  onNotificationClick() {
    console.log('Notifications clicked');
  }

}
