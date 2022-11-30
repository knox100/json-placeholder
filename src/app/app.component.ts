import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-users></app-users>
  `,
})
export class AppComponent {
  title = 'fetch';
}
