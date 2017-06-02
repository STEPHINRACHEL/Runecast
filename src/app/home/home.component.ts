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
  
  sortBase="kbid";
  directionObj={};
  direction="up";
  
  
  
  
  /*add():void{
  if(this.task)
  {
  //this.myService.addTask(this.myService.name,this.task)
  this.task="";
  this.hasRecords=true;
  }
  }*/ 
  changeSortBase(base):void{
  this.sortBase=base;
  if(this.directionObj[base]=="up" || this.directionObj[base]==undefined){
  this.directionObj[base]="down";
  }
  else{
  this.directionObj[base]="up";
  }
  //alert(base+" : "+this.directionObj[base]);
  }

  ngOnInit() {
  if(this.myService.name==""){
  //this.myRouter.navigate(['login']); //uncomment on deployment
  }
  }
  
  

}
