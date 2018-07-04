import { Component } from '@angular/core';

@Component({
    selector : 'app-user',
    // template : `<h2>User Component Loaded Successfully!</h2>`
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`]
    // styles : [`
    //     h2{
    //         color : darkblue;
    //     }
    // `]
})
export class UserComponent{
    moreInfo(user : any){
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }
    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 21, 1964"),
        income : 50000,
        isWorking : true,
        company : "Microsoft",
        image : "assets/images/bill.jpg",
        vote : 120
    }
}