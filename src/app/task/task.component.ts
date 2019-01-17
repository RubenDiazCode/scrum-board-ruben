import { Component, Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
@Input() task: Task;
  editing = false;
  constructor(private dataService:DataManagerService) { }

  deleteTask(){
  this.dataService.deleteTask(this.task);
  }

  editName(){
    
     this.dataService.editTaskName(this.task);
     this.editing=false;
   }
   edit(){
    
     this.editing=true;
   }

   completed(){
    this.task.completed=this.dataService.completedTask(this.task);
   
   }

}
