import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
interface todo {
  id: number;
  task: string;
}
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  task!: string;
  todos: todo[] = [];

  addTodo() {
    this.todos.push({ id: this.todos.length + 1, task: this.task });
    this.task="";
  }

  deleteTodo(id:number){
    console.log(id);
    this.todos=this.todos.filter((todo)=>{
       return todo.id!==id;
    })
  }
}
