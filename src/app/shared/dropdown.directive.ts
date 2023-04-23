import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[app-dropdown]'
})
export class DropDownDirective {
    constructor(private elRef:ElementRef){}
    @HostBinding('class.open') showMenu = false;

    @HostListener('document:click',['$event']) toggleDropdown(event:Event){
        
        this.showMenu = this.elRef.nativeElement.contains(event.target) ? !this.showMenu : false;

    }
}