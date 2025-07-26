import { Component, NgModule, signal } from '@angular/core';
import { User } from './user/user';
import { FormsModule, NgModel } from '@angular/forms';
import { UserData } from './user-data/user-data';
import { ChildToParent } from "./child-to-parent/child-to-parent";

@Component({
  selector: 'app-root',
  imports: [FormsModule, User, UserData, ChildToParent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedUser: string = 'chayandev bera';

  onUserChange(event: any) {
    this.selectedUser = event.target.value;
  }

  userData = [
    { name: 'Chayandev Bera', rollNo: 'CSE2021059' },
    { name: 'Raj Mondal', rollNo: 'CSE2021051' },
    { name: 'Urbi Chak', rollNo: 'CSE2021060' },
  ];

  users!:string[]
  handleUsersFromChild(users:string[]){
    console.log(users)
    this.users=users
  }
}
