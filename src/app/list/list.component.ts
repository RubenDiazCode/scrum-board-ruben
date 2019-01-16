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

  constructor(private dataService: DataManagerService) { }

 delete(id){
  if(confirm('quieres borrar la lista '+this.list.name+ '?')){
    this.dataService.deleteList(this.list.listId);
  }
 }

}
