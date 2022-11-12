import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() index!:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todosCheckBox: EventEmitter<Todo> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('has ben trigered');
  }
  checkboxClick(todo: Todo) {
    console.log("dfjslkd",todo)
    this.todosCheckBox.emit(todo)
  }
}
