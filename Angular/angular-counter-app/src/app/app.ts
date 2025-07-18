import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count: number = 0;
  handleIncrement() {
    this.count=this.count+1; 
  }
  handleDecrement() {
    this.count=this.count > 0 ? this.count-1 : this.count;
  }
  hadleReset() {
    this.count = 0;
  }
}
