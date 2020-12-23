import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskAdderComponent } from '../task-adder/task-adder.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  @ViewChildren(TaskComponent)
  taskItems: QueryList<TaskComponent>;
  @ViewChildren(TaskAdderComponent)
  addItems: QueryList<TaskAdderComponent>;

  idCounter: number = 0;
  tasks: Task[];
  currentTask: Task;

  constructor() {
    this.currentTask = null;
    this.tasks = [
      {
        id: 0,
        name: 'Breakfast',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl nunc, consectetur quis dui posuere, placerat convallis metus. Vivamus lacinia maximus nibh. Morbi ac sodales arcu, vel feugiat ligula. Integer efficitur ante sit amet ipsum consequat, sed pharetra enim suscipit. Suspendisse potenti. Aenean a egestas tortor, et rhoncus ante. Ut lacinia urna non ligula tristique, sit amet pulvinar orci dignissim. Mauris eros nunc, volutpat eu massa sit amet, porta condimentum urna. Maecenas ullamcorper dapibus congue. Aliquam sed porta metus, in cursus justo. Fusce et tellus vel ligula placerat aliquet ut a felis. Aenean eget euismod metus.',
      },
      {
        id: 1,
        name: 'Lunch',
        description:
          'Pellentesque et sagittis erat. Mauris elementum ultricies volutpat. Etiam quis congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam congue nulla et euismod placerat. Nunc augue enim, tincidunt in aliquet id, rutrum ac erat. Quisque est felis, vestibulum et turpis id, feugiat egestas eros. Suspendisse faucibus nibh felis, vitae scelerisque nunc fermentum ullamcorper. Proin velit enim, euismod sed arcu ut, eleifend ultricies urna. Pellentesque vitae rutrum mi. Fusce vitae finibus justo. Phasellus neque tellus, pharetra id placerat at, lacinia eu ante. Fusce convallis odio urna, eget faucibus risus commodo ac. Nullam consequat purus quis lectus interdum egestas. Pellentesque eget ante sed libero efficitur rutrum id et leo.',
      },
      new Task(
        2,
        'Dinner',
        'Duis condimentum, magna posuere luctus rutrum, quam tellus suscipit elit, non sodales augue sem eget elit. Sed sit amet efficitur elit, ac consequat ex. Maecenas pulvinar velit magna, sed pharetra arcu consectetur in. Donec maximus fringilla velit tincidunt molestie. In efficitur neque vitae justo accumsan scelerisque. Cras vehicula odio purus, a sodales eros ultrices at. Vestibulum vehicula odio sit amet ex gravida consectetur eget sed nisl.'
      ),
    ];
    this.idCounter = this.tasks.length;
  }

  ngOnInit(): void {}

  selectedTask(tc: TaskComponent) {
    let currentSelected = null;
    this.taskItems.forEach((t) => {
      if (t.isSelected) {
        currentSelected = t.task.id;
      }
      t.isSelected = false;
      this.currentTask = null;
    });
    if (tc.task.id == currentSelected) {
      return;
    }
    tc.isSelected = true;
    this.currentTask = tc.task;
  }

  deleteTask(tc: TaskComponent) {
    alert(`Deleted ${tc.task.name}`);
    this.tasks.splice(tc.task.id, 1);
  }

  addTask(ta: TaskAdderComponent) {
    let newTask = new Task(this.idCounter++, ta.task.name, ta.task.description);
    this.tasks.push(newTask);
    alert(`Added ${ta.task.name}`);
    ta.form.reset();
  }
}
