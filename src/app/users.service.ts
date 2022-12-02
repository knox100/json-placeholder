import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Get users
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  // Get user
  getUser(id: number): Observable<Users> {
    return this.http.get<Users>(`this.url/${id}`);
  }
}
