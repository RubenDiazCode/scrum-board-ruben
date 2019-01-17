import { Injectable } from '@angular/core';
import {List} from './models.interface';
import {Task} from './models.interface';
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
//funcionalidades de listas
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


//funcionalidades de tareas
addNewTask(text: string, listId: number){
  const now = new Date();
  const newTask ={
  listId,
  taskId: Date.now(),
  text,
  completed: false,
  color: 'green',
  createdAt: now,
  modifiedAt: now,

  }
  this.data.lists[this.findList(listId)].tasks.push(newTask);
}

//buscador de la lista que contiene la tarea
findList(id:number){
  var i: number = 0;
  for( let list of this.data.lists){
    if(list.listId === id){
      return i;
    }
    i++;
  }
}

//borrador de tareas
deleteTask(task: Task){
  this.data.lists = this.data.lists.map(listObj =>{
    if(listObj.listId == task.listId){
      listObj.tasks = listObj.tasks.filter(taskObj => taskObj.taskId !== task.taskId);
    }
    return listObj;
  });
}

  constructor() { }
}

