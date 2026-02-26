import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Cv } from './cv/cv';
import { HomeAccount } from './accounts/home-account/home-account';

@Component({
  selector: 'app-root',
  imports: [HomeAccount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-GL-B');
}
