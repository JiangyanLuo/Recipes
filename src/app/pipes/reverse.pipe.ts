import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name:'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: string) {
        if(value.length < 2){
            return value;
        }
        const arr:string[] = value.split("");
        arr.reverse();
        return arr.join("");
    }
}