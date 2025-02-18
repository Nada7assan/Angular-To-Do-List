import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './Task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

   apiUrl = 'http://localhost:3000/Task';

  constructor(public http :HttpClient) { }

  getTasks(): Observable<Task[]>{
      return this.http.get<Task[]>(this.apiUrl)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
