import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule],
  exports: [UsersComponent],
})
export class UsersModule {}
