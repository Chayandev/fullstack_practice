import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input() parentCount!:number
  count!: number;
  constructor() {
    console.log('Counter  component is instatiated');
    this.count = 0;
  }
  ngOnInit() {
    console.log('Here the Component inputs are initialized');
    this.count = 0; // in this block only the count is initialized not in the other.
  }

  updateCount(){
    this.count=this.count+1;
  }

  ngOnChanges(){
         console.log("Component Input is Changed") // this is called when the input form parent to child is getting chaged
  }
  ngOnDestroy(){
    console.log("Counter is Destroyed here.");
    
  }

}
