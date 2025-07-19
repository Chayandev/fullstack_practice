import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  show = true;
  showRed = true;
  color = 1;
  col = 'red';

  users = ['Chayan', 'Raj', 'Souvik', 'Somtirtha', 'Urbi'];
  students = [
    { name: 'Chayan', rollNo: 'CSE2021059' },
    { name: 'Raj', rollNo: 'CSE2021051' },
    { name: 'Urbi', rollNo: 'CSE2021060' },
    { name: 'Souvik', rollNo: 'CSE2021056' },
  ];

  toggle() {
    this.show = !this.show;
  }

  toggleTwo() {
    this.showRed = !this.showRed;
  }

  handleColorBtnClick(value: number) {
    this.color = value;
  }

  handleInputColor(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

  handleColorChangeSwitch(value: string) {
    this.col = value;
  }

  handleColorInputText(event: Event) {
    this.col = (event.target as HTMLInputElement).value;
  }

  getId(id: number) {
    alert(`Id:${id}`);
  }
}
