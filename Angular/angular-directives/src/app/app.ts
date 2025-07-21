import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show=true;

  studentsData=[
    {
      name:"Chayandev Bera",
      rollNo:"CSE2021059",
      semMarks:[9.5,9.4,8.8,8.3,8.9]
    },
     {
      name:"Souvik Bhat",
      rollNo:"CSE2021056",
      semMarks:[9.5,9.5,9.0,8.6,9.0]
    }
  ]

  loggedIn=true
  color='red'
  handleColorChangeSwitch(color:string){
    this.color=color
  }
}
