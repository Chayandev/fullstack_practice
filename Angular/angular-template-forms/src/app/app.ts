import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 addDetails(val:NgForm){
  console.log(val)
 }
}
