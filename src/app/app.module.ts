import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list.component';
import { UserDetailsComponent } from './components/user-details.component';
import { UserService } from './shared/services/user.service';

@NgModule({
    imports: [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(ROUTES)
    ],
    declarations: [ 
      AppComponent,
      UserListComponent,
      UserDetailsComponent
    ],
    bootstrap: [ 
      AppComponent
    ],
    providers: [
      UserService
    ]
})

export class AppModule {}