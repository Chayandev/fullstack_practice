import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = signal(0);
  // constructor() {
  //   effect(() => {
  //     console.log(this.count());
  //   });
  // }
  handleCounter(operation: string) {
    if (operation === 'dec') {
      this.count.set(this.count() - 1);
    } else {
      this.count.set(this.count() + 1);
    }
  }

  // two types fo signals are there one is Writable signal and other is Computed,
  // in case of writebale we can update the value, but for the computed one we can't update , its read only

  // also there is one way to update the value of the singal rather than set, that is update
  // but limitation is that , we can use update only for sinlge data type of the signal variable

  // x:WritableSignal<number|string>=signal(0); // this is writable signal , by default signals are writeble
  x: WritableSignal<number> = signal(0);
  handleUpdateX() {
    this.x.update((value) => value + 1); // with multiple type we can't use this update.
    // the update gives a call back with the pervious value reference
  }

  // Computed Signal
  // This is the singal which are normaly read only, explicitly we can't change tha value
  // if this singal are depndent to other than based on the other this can automaically change
  a = signal(10);
  b = signal(20);
  sum = computed(() => this.a() + this.b()); // whenever the value of the dependet signals like a and b are going to change the value of the computed signal sum is changed.
  setValueA(event: Event) {
    this.a.set(parseInt((event.target as HTMLInputElement).value));
  }

  // Effects in angular
  displayPageTitle = false;

  constructor() {
    // alswyes the effects are defined insdie the constructor
    effect(() => {
      if (this.count() === 2) {
        this.displayPageTitle = true;
        setTimeout(() => {
          this.displayPageTitle=false
        }, 2000); //contorlt he visisbility timings
      } else {
        this.displayPageTitle = false;
      }
    });
  }
}
