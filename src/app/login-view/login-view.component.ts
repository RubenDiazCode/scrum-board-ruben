import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginVIewComponent  {

  username: string;
  password: string;
  error: any;
  valid: any;

  constructor(private api: ApiService, private router: Router) { }

  login(){
    const {username, password} = this;
    if(this.username.trim() !== '' && password.trim() !== ''){
      this.api.
      login(username.trim(), password.trim())
      .then(() =>{
        // console.log('then',res);
        this.error = undefined;
        this.router.navigate(['/board']);
       // this.valid = res;
      })
      .catch(error =>{
        console.log('catch',error);

        this.error=error;
      });
    }
  }
 

}
