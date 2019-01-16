import { Injectable } from '@angular/core';
import {List} from './models.interface';
@Injectable({
  providedIn: 'root'
})



export class DataManagerService {
  //definicion del modelo de datos
  data : {lists: Array<List>}= {
    lists: [
      {
        listId: 0,
        name:'to do',
        createdAt: new Date(),
        modifiedAt: new Date(),
        tasks:[{
          listId: 0,
          taskId: 0,
          text: 'texto de tarea',
          completed: false,
          color: 'white',
          createdAt: new Date(),
          modifiedAt: new Date(),
          },
        ],
      }
    ]
  }
getData(){
  return this.data;
}

addNewList(name: string){
  const now = new Date();
  const newList: List ={
    listId: Date.now(),
    createdAt: now,
    modifiedAt: now,
    name,
    tasks:[],
  };
  this.data.lists.push(newList);
}


deleteList(listId: number){
  this.data.lists = this.data.lists.filter( list => list.listId !== listId);
}

  constructor() { }
}
