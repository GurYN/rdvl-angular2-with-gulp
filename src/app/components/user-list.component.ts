import { Component, OnInit } from '@angular/core';

import { ApiResponse } from '../shared/models/api-response.model';
import { UserService } from '../shared/services/user.service';

@Component({
    selector:    'user-list',
    templateUrl: '/app/components/user-list.component.html'
})

export class UserListComponent implements OnInit {
    api_response: ApiResponse;
    pageArray = Array;

    constructor(private userService: UserService) { }

    ngOnInit() { 
        this.userService.geAllUsers()
            .subscribe(res => this.api_response = res );
    }

    setPage(pageNb:number) {
        this.api_response = null;
    
        this.userService.geAllUsers(pageNb)
            .subscribe(res => this.api_response = res );
    }
}