import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class HighlightDirective{
    @Input('myColor') myColor : string;
    @HostBinding('style.backgroundColor') bgColor : any;

    @HostListener('mouseenter') mouseenter(){
        // alert("Test");
        // this.elementRef.nativeElement.style.backgroundColor = this.myColor ;
        this.bgColor = this.myColor;
    }
    @HostListener('mouseleave') mouseleave(){
        this.bgColor = "transparent";
        // this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }

    constructor(private elementRef : ElementRef){
        //  console.log(this.elementRef);
        //  console.log(this.myColor);     //undefined
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }
}