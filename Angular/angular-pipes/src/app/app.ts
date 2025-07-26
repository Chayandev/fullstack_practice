import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyconverterPipe } from './pipe/currencyconverter-pipe';

@Component({
  selector: 'app-root',
  imports:[CommonModule,CurrencyconverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title="Angular Pipes"
   name="Chayan"
   date=new Date();

   amount=10
}
