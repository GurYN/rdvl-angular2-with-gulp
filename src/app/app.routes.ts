import { Route } from '@angular/router';

import { UserListComponent } from './components/user-list.component';
import { UserDetailsComponent } from './components/user-details.component';

export const ROUTES: Route[] = [
    { path: '', redirectTo: 'user-list', pathMatch: 'full' },
    { path: 'user-list', component: UserListComponent },
    { path: 'user-details/:id', component: UserDetailsComponent },
    { path: '**', redirectTo: 'user-list' }
];