import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mock';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable()
export class UserService {
    counter : number = 0;
    getUserData(){
        // let userdata: User[];
         return this.http.get("assets/data/user-data.json")
            .map(response=><User[]>response.json().userdata)
            // .subscribe(data=>userdata = data);
            // return userdata;
        // return USER_DATA;
    }
    constructor(private http : Http){}
}