import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // name = new FormControl();
  // password = new FormControl();

  // submit(e: Event) {
  //   e.preventDefault();
  //   console.log(`${this.name.value} and ${this.password.value}`);
  // }

  // setValues() {
  //   this.name.setValue('Chayan');
  //   this.password.setValue('12345');
  // }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  submitProfile() {
    console.log(this.profileForm.value);
  }

  setProfileValue() {
    this.profileForm.setValue({
      name: 'Chayandev',
      email: 'dev@gmail.com',
      password: '123343',
    });
  }

  get name(){
    return this.profileForm.get('name');
  }
  get email(){
    return this.profileForm.get('email');
  }
  get password(){
     return this.profileForm.get('password');
  }
}
