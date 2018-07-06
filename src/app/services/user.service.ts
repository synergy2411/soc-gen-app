import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mock';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { AuthService } from './auth.service';

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
    getApiData(){
        return this.httpClient.get<User[]>("https://soc-gen-app.firebaseio.com/userdata.json?auth="+this.authService.getToken())
            
    }
    constructor(private http : Http,
                private httpClient : HttpClient,
                private authService : AuthService){}
}


// npm install firebase --save