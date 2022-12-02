import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <div>
    <!-- (click)="navigateToUsers()" -->
    <button
      class="bg-black hover:text-gray-600 rounded-md text-white mx-8 border-solid p-2 mt-2 border-white"
    >
      <a
        class="bg-black hover:cursor-pointer hover:text-gray-600 rounded-md text-white mx-8 border-solid p-2 mt-2 border-white"
        routerLink="/users"
        >Users</a
      >
    </button>
  </div>`,
  styles: [],
})
export class HomeComponent implements OnInit {
  location: any;
  constructor() {}

  ngOnInit(): void {}

  navigateToUsers() {
    this.location.forward();
  }
}
