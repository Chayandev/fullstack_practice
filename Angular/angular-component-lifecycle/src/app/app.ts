import {
  afterEveryRender,
  afterNextRender,
  Component,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @ViewChild('counter') Counter: any;

  constructor() {
    afterEveryRender(() => {
      console.log('Counter Re-rendered with chanages!');
    });
    afterNextRender(() => {
      console.log('Counter Re-rendered with chanages!---- single time');
    });
  }

  parentCount: number = 0;
  updateParentCounter() {
    this.parentCount = this.parentCount + 1;
  }
}
