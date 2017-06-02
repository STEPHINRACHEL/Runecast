import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TodoServiceService } from '../todo-service.service';

import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  username=this.myService.name;
  password="12345";
  uname="";
  pwd="";
  

  
  login(): void {

  let flag:boolean=true;
  for( var v in this.myService.users){
    
    if(this.uname==this.myService.users[v].uname&&this.pwd==this.myService.users[v].pswd)
    {
        this.myService.name=this.uname;
        this.myRouter.navigate(['home']);
        flag=false;
        
    }
    }
    if(flag==true)
    alert("Error in username or password");
    
}
    
    
    
  constructor(public myRouter : Router,private myService: TodoServiceService ,private http: Http) { }
  ngOnInit() {

  }
  

}
