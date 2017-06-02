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
  /*
  let obs=this.http.get("http://localhost:3000/login")
                    .map(res=>{                   
                            let body = res.json();
                            return body;
                          })
                    .catch(error=>{
                               
                                let errMsg: string;
                                if (error instanceof Response) {
                                  const body = error.json() || '';
                                  const err = body.error || JSON.stringify(body);
                                  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                                } else {
                                  errMsg = error.message ? error.message : error.toString();
                                }
                                console.error(errMsg);
                                return Observable.throw(errMsg);
                              });
  
  obs.subscribe(
                       function(data){
                       console.log("data :",data);
                       }
                       ,
                       error =>  console.log(error));
                       
   */                    
  
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
