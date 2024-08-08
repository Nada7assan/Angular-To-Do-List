import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from "./footer/footer.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TasksService } from './tasks/tasks.service';
import { CustomDatePipe } from './custom-date.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, TasksComponent, CustomDatePipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
