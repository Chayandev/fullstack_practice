import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular-button-click';

  handleSum(a:number,b:number){
     console.log(a+b);
  }

  handleEvents(event:Event){
     console.log(`Function for ${event.type}`)
   }
}
