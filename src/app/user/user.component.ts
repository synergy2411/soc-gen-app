import { Component, 
    Input,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy, 
    SimpleChanges} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
    selector : 'app-user',
    // template : `<h2>User Component Loaded Successfully!</h2>`
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`],
    providers : [UserService]
    // styles : [`
    //     h2{
    //         color : darkblue;
    //     }
    // `]
})
export class UserComponent 
    // implements OnChanges,
    // OnInit,
    // DoCheck,
    // AfterContentInit,
    // AfterContentChecked,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy
    {
    @Input('xyz') users : User[];
    @Input('title') title : string;
    myBorderStyle = {
        myBorder : false,
        decoration :true
    }
    myColor : string = 'red';
    moreInfo(user : User){
        this.myBorderStyle.myBorder = true;
        this.myBorderStyle.decoration = false;
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }
    increase(){
        this.userService.counter++;
    }
    constructor(public userService : UserService){
        //console.log("constructor");
    }
    // ngOnChanges(changes : SimpleChanges){
    //     console.log("ngOnChanges");
    //     console.log(changes);
    // }
    // ngOnInit(){console.log("ngOnInit")}
    // ngDoCheck(){console.log("ngDoCheck")}
    // ngAfterContentInit(){console.log("ngAfterContentInit")}
    // ngAfterContentChecked(){console.log("ngAfterContentChecked")}
    // ngAfterViewInit(){console.log("ngAfterViewInit")}
    // ngAfterViewChecked(){console.log("ngAfterViewChecked")}
    // ngOnDestroy(){console.log("ngOnDestroy")}
}