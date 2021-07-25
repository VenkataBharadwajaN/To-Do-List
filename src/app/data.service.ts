import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todoList=[]

  constructor() 
  { 
    if (localStorage.getItem('todo')==null)
    {
      localStorage.setItem('todo',JSON.stringify(this.todoList))
    }
    else
    {
      this.todoList=JSON.parse(localStorage.getItem('todo'))
    }
  }

  addTodo(todo)
  {
    this.todoList.push(todo)
    this.sort();
    localStorage.setItem('todo',JSON.stringify(this.todoList))
  }
  
  updateTodo(id)
  {
    this.todoList[id].status=!this.todoList[id].status;
    this.sort();
    localStorage.setItem('todo',JSON.stringify(this.todoList))
  }

  deleteTodo(index)
  {
    this.todoList.splice(index,1);
    localStorage.setItem('todo',JSON.stringify(this.todoList))
  }

  sort()
  {
    let sorted=this.todoList.sort(function(a, b){return a.status - b.status});
  }

  editTodoText(editObj)
  {
    let index=this.todoList.findIndex(todo=>todo.id==editObj.id)
    this.todoList.splice(index,1,editObj)
    localStorage.setItem('todo',JSON.stringify(this.todoList))
  }
  
}
