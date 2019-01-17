import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
@Input() list: List;
taskText: string='';
  constructor(private dataService: DataManagerService) { }

addTask(){
  this.dataService.addNewTask(this.taskText,this.list.listId);
}

 delete(id){
  if(confirm('quieres borrar la lista '+this.list.name+ '?')){
    this.dataService.deleteList(this.list.listId);
  }
 }

}
