import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter();
  @Output()
  OnDelete: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean;

  constructor() {}

  ngOnInit(): void {}

  select() {
    this.OnSelected.emit(this);
  }

  delete() {
    this.OnDelete.emit(this);
  }
}
