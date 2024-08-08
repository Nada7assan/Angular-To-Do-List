import { Component } from '@angular/core';
import { Task } from './Task';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';
import { CustomDatePipe } from "../custom-date.pipe";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CustomDatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  newTask: Task = { name: '', date: new Date(), done: false };
  tasks: Task[] = [];
  editMode: boolean = false;
  taskToEdit: Task | null = null;

  constructor(public taskSer : TasksService){ }
  
  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskSer.getTasks().subscribe(T => {
      this.tasks = T;
    });
  }
  addTask() {
    if (this.newTask.name && this.newTask.date) {
      this.taskSer.addTask(this.newTask).subscribe(task => {
        this.tasks.push(task);
      this.newTask = {name: '', date: new Date(), done: false };
    });
  }
  }

  deleteTask(task: Task) {
    if (task.id !== undefined) {
      this.taskSer.deleteTask(task.id).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      });
  }
}

  editTask(task: Task){
    this.editMode = true;
    this.taskToEdit = task;
    this.newTask = { ...task };
  }
  updateTask() {
    if (this.taskToEdit && this.taskToEdit.id !== undefined) {
      this.taskSer.updateTask(this.newTask).subscribe(updatedTask => {
        const index = this.tasks.findIndex(t => t.id === this.taskToEdit?.id);
        this.tasks[index] = updatedTask;
        this.cancelEdit();
      });
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.taskToEdit = null;
    this.newTask = { name: '', date: new Date(), done: false };
  }
}

