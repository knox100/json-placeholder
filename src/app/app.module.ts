import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: 'details/:id', component: UserComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    UserModule,
    RouterModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
