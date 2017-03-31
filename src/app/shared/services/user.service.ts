import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { ApiResponse } from '../models/api-response.model';

const base_url:string = 'https://reqres.in/';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    /**
     * Get all users
     */
    geAllUsers(page: number = 1) : Observable<ApiResponse> {
        return this.http.get(`${base_url}api/users?page=${page}`)
            .map(res => {
                return res.json() as ApiResponse;
            })
    }

    /**
     * Get user details
     * @param id User Id
     */
    getUserDetails(id: number) : Observable<User> {
        return this.http.get(`${base_url}api/users/${id}`)
            .map(res => {
                return res.json().data as User;
            })
    }
}