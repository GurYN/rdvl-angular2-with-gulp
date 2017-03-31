import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'user-details',
    templateUrl: '/app/components/user-details.component.html'
})

export class UserDetailsComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {
        let userId = this.route.snapshot.params['id'];

        this.userService.getUserDetails(userId)
            .subscribe(res => this.user = res);
     }
}