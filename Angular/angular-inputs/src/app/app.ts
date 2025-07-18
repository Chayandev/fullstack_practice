import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name!: string;
  displayName!: string;
  email!:string;
  displayEmail!:string;
  handleNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    console.log(this.name);
  }

  getName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Default';
  }

  getEmail(value:string){
    this.displayEmail=value
  }

  setEmail(){
    this.email="default@emial"
  }

}
