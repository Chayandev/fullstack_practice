import { Component, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}
  getUserProfile() {
    this.router.navigate(['profile'], {
      queryParams: { name: 'Chayandev Bera' },
    });
  }

  users = [
    { id: 1, name: 'Chayan' },
    { id: 2, name: 'Raj' },
    { id: 3, name: 'Souvik' },
  ];
}
