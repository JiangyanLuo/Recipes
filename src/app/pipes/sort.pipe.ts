import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, org:any){
    if(value.length < 2) {
      return value;
    }
    
    return [...value].sort((a:any,b:any)=>{
      if(a[org] > b[org]){
        return 1;
      } else {
        return -1;
      }
    });
  
    
  }

}
