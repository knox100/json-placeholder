import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  template: `
    <div class="bg-gray-100">
      <h1 class="flex justify-center items-center font-bold text-2xl">
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
              routerLink="/details"
              class="bg-black hover:text-gray-600 rounded-md  border-solid p-2 mt-2 border-white"
            >
              View Details
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

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }
}
