import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  template: `
    <div class="">
      <h1
        *ngIf="users.length > 0"
        class="flex justify-center items-center font-bold text-2xl"
      >
        This is a JSON PlaceHolder App
      </h1>
      <div class="grid grid-cols-4 p-6">
        <ul *ngFor="let user of users">
          <div
            class="m-4 p-4 rounded-lg text-white bg-slate-500 hover:shadow-lg cursor-pointer slate-300 font-semibold"
          >
            <li>Username : {{ user.username }}</li>
            <li>Name : {{ user.name }}</li>
            <li>Email address : {{ user.email }}</li>
            <button
              class="bg-black hover:text-gray-600 rounded-md  border-solid p-2 mt-2 border-white"
            >
              <a routerLink="/user/id">View Details</a>
            </button>
          </div>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
  users!: Users[];
  router: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  //Navigating to user

  // Getting users
  getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
