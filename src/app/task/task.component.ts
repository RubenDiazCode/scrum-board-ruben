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
  oldTaskText:string;
  constructor(private dataService:DataManagerService) { }

  deleteTask(){
  this.dataService.deleteTask(this.task.listId);
  }

  editName(){
      this.oldTaskText=this.task.text;
     this.dataService.editTaskName(this.task);
     this.editing=false;
   }
   edit(){
      this.oldTaskText=this.task.text;
     this.editing=true;
   }

   completed(){
    this.task.completed=this.dataService.completedTask(this.task);
   
   }

   cancelEdit(){
    console.log('cancel edit'+this.oldTaskText);
  this.task.text = this.oldTaskText;
  console.log(this.oldTaskText);
  this.editing = false;
  } 

}
