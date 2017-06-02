import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {  // only based on title

  transform(value: any, arg: string): any {
  //debugger;
    let retObj=[];
    for( var i in value){
        if(value[i].title.indexOf(arg?arg:"")!=-1)
        retObj.push(value[i]);
    }    
    return retObj; 
  }

}


/*
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    let retObj=[];
    for( var i in value){
        if(value[i].task.indexOf(arg?arg:"")!=-1)
        retObj.push(value[i]);
    }    
    return retObj; 
  }

} */
