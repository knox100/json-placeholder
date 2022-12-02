import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h1>
        These are the details of the selected users now how do i write the logic
        to implement each user?????/
      </h1>
      <ul></ul>
    </div>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  user!: Users[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {}
}
