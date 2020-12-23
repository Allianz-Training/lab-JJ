import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.css'],
})
export class TaskAdderComponent implements OnInit {
  @Output()
  OnAddClick: EventEmitter<TaskAdderComponent> = new EventEmitter();

  task: Task;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {}

  addClick() {
    this.task = new Task(
      1,
      this.form.get('name').value,
      this.form.get('description').value
    );
    this.OnAddClick.emit(this);
  }
}
