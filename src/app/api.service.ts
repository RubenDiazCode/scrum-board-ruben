import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
jwt: string;


  constructor(private http:HttpClient) { }

  register(username,password){
    return this.http.post('https://apitrello.herokuapp.com/users',{username, password}).toPromise();  
  }
  login(username,password){
    return new Promise((resolve, reject)=>{
    this.http.post('https://apitrello.herokuapp.com/users/login',{username, password})
    .toPromise()
    .then( result =>{
      console.log('then', result);
      reject(204);
    }).catch(maybeNotAndError =>{
      console.log('catch', maybeNotAndError);
      if(maybeNotAndError.status === 200){
        const jwt=maybeNotAndError.error.text;
        this.jwt = jwt;
        resolve('user not found');
      } else if(maybeNotAndError.status === 401){
        reject('wrong pass');
      } 
      else {
        reject('try again');
      }
    });
  }); 
  }
}
