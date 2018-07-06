import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mock';

@Injectable()
export class UserService {
    counter : number = 0;
    getUserData(){
        return USER_DATA;
    }
}