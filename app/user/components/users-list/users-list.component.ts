import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html'
})

export class UsersListComponent implements OnInit {
  
  users: UserModel[];

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

}