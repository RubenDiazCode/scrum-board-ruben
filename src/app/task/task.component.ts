import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
@Input() task: Task;
  constructor(private dataService:DataManagerService) { }

  deleteTask(){
this.dataService.deleteTask(this.task);
  }

}
