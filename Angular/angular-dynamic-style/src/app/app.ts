import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports:[FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   bgColor="red";
   fontSize=30;
   zoom=signal(true);
}
