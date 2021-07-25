import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDoList;
  editStatus=false;
  editObject;
  
  constructor(public dataServiceObject:DataService) { }

  ngOnInit(): void 
  {
      
  }

  addTodo(ref)
  {
    let refCopy=ref.value;
    if(refCopy.todo===null || refCopy.todo.length==0)
    {
      alert('Todo Name Cannot Be Empty');
      return ;
    }
      let temp={status:false,todo:refCopy.todo,id:Date.now()}
      this.dataServiceObject.addTodo(temp)
      ref.reset();
  }
  
  updateTodo(index)
  {
    this.dataServiceObject.updateTodo(index);
  }

  deleteTodo(index)
  { 
    this.dataServiceObject.deleteTodo(index);
  }

  editTodo(todo)
  {

    this.editObject=Object.assign({},todo);

      this.editStatus=true;

  }

  saveTodo()
  {
    if(this.editObject.todo===null || this.editObject.todo.length==0)
    {
      alert('Todo Name Cannot Be Empty');
      return ;
    }
    this.editStatus=false;
    this.dataServiceObject.editTodoText(this.editObject)
  }

  dontSaveTodo()
  {
    this.editStatus=false;
  }

  

}
