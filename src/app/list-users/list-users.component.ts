import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService) { 
    this.userService.getUsers().subscribe(res => {
      this.users = res['data']
    })
  }

  ngOnInit() {
  }

}
