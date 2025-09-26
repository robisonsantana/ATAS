import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { SubHeaderComponent } from './components/subheader/subheader';
import { FooterComponent } from './components/footer/footer';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SubHeaderComponent, FooterComponent],
  providers: [TestService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('atasystem');

  private testService = inject(TestService);

  ngOnInit(): void {
    this.testService.testBackend();
  }
}
