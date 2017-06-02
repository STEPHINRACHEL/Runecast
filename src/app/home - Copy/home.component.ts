import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../todo-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  constructor(private myService: TodoServiceService, private myRouter:Router) { }
  
  task="";
  hasRecords=false;
  
  
  
  
  
  add():void{
  if(this.task)
  {
  this.myService.addTask(this.myService.name,this.task)
  this.task="";
  this.hasRecords=true;
  }
  }

  ngOnInit() {
  if(this.myService.name==""){
  //this.myRouter.navigate(['login']); //uncomment on deployment
  }
  }
  
  

}
