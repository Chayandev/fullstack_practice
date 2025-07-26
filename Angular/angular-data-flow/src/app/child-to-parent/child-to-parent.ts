import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [],
  templateUrl: './child-to-parent.html',
  styleUrl: './child-to-parent.css'
})
export class ChildToParent {
  @Output()
  getUsers=new EventEmitter()
   users=["Ram","Sam","Dam"];

   loadData(){
     this.getUsers.emit(this.users)
   }
}
