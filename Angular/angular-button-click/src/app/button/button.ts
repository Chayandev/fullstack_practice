import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
   handleBtnClick(event:Event){
    console.log(`Function for ${event.type}`)
     alert(`Button is Clicked`);
     this.otherFunction(); // to call the other function present in teh class we have to use this , else it will give error as its will not be able to detect which fucntion to call , we haev to give context.

   }

   otherFunction(){
    console.log("Other fucntion dependent on button is called")
   }

}
