import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [Login, Profile],
  templateUrl: './app.html',  // what ever changes and variable we made in thsi file class , that can only be accessed by the html provided in the templateURl
  styleUrl: './app.css'
})
export class App {
 title="CDB" 
}
