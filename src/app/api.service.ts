import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http:HttpClient) { }

  register(username,password){
    return this.http.post('https://apitrello.herokuapp.com/users',{username, password}).toPromise()
   
  }
}
