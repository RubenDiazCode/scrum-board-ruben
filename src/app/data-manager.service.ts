import { Injectable } from '@angular/core';
import {List} from './models.interface';
import {Task} from './models.interface';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})



export class DataManagerService {
  //definicion del modelo de datos
  data : {lists: Array<List>}= {
    lists: [],
  }


loadDataFromBackend(){
  this.api
      .getLists()
      .then((rawLists: Array<any>) => {
        console.log(rawLists);
        const lists = rawLists.map(rawList => ({
          listId: rawList.id,
          createdAt: rawList.createdAt,
          modifiedAt: rawList.updatedAt,
          name: rawList.name,
          tasks: [],
        }));
        Promise.all(
          lists.map(async (list: List) => {
            list.tasks = await this.api.getTasks(list.listId);
            list.tasks = list.tasks.map((rawTask: any) => ({
              listId: rawTask.idlist,
              taskId: rawTask.id,
              text: rawTask.task,
              completed: false,
              color: 'white',
              createdAt: new Date(rawTask.createdAt),
              modifiedAt: new Date(rawTask.updatedAt),
            }));
            return list;
          }),
        ).then(lists => {
          this.data.lists = lists;
        });
      })
.catch(() => this.router.navigate(['/login']));
}


getData(){
  //return this.data;
  //pillando los datos del backend
  this.loadDataFromBackend();
  return this.data;
}
//funcionalidades de listas
addNewList(name: string){
  // const now = new Date();
  // const newList: List ={
  //   listId: Date.now(),
  //   createdAt: now,
  //   modifiedAt: now,
  //   name,
  //   tasks:[],
  // };
  // this.data.lists.push(newList);
  this.api.newList(name).then(res => {
    console.log(res);
    this.loadDataFromBackend();
});
}


deleteList(listId: number){
 // this.data.lists = this.data.lists.filter( list => list.listId !== listId);
 this.api.deleteList(listId).then(res =>{
   this.loadDataFromBackend();
 });
}


//funcionalidades de tareas
addNewTask(text: string, list: List){
  const now = new Date();
  const newTask ={
    //listId,
  listId: list.listId,
  taskId: Date.now(),
  text,
  completed: false,
  color: 'green',
  createdAt: now,
  modifiedAt: now,

  }
  //this.data.lists[this.findList(listId)].tasks.push(newTask);
  this.data.lists = this.data.lists.map(listObj => {
    if (listObj.listId === list.listId) {
      listObj.tasks.push(newTask);
    }
    return listObj;
});
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

//edicion de lista
editListName(list: List){
  this.data.lists = this.data.lists
  .map(listObj =>( listObj.listId === list.listId ? list : listObj));
}

//edicion de tareas
editTaskName(newTask: Task){
  // this.data.lists[this.findList(task.listId)].tasks=this.data.lists[this.findList(task.listId)].tasks
  // .map(taskObj =>( taskObj.taskId === taskObj.taskId ? task : taskObj) );
  this.data.lists=this.data.lists.map(list =>{
    if(list.listId===newTask.listId){

      list.tasks=list.tasks.map(task => {

        if(task.taskId ===newTask.taskId){
          return newTask;
        }

        return task;
      })
    }
    return list;
  })
}

//comprobar estado
completedTask(task: Task){
  task.completed = !task.completed;
  return task.completed;
}






  constructor(private api: ApiService, private router: Router) {
   // api.getLists();
   }
}

