import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { _MatPaginatorBase } from '@angular/material';
import { map as _map } from 'lodash';
import { map, tap } from 'rxjs/operators';
import { User } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = 'api/users';
  private addUserUrl = 'api/createUser';
  private editUserUrl = 'api/editUser';
  private deleteUserUrl = 'api/users/';

  constructor(
    private httpClient: HttpClient
  ) { }

  addUser$(user: any): Observable<User> {
    return this.httpClient.post<any>(this.addUserUrl, user).pipe(
      map(result => {
        console.log('Add User : ', result)
        return result
      })
    )
  }

  loadAllUser$(): Observable<User[]> {
    return this.httpClient.get<any>(this.getAllUsersUrl).pipe(
      map(result => {
        return result
      })
    )
  }

  editUser$(updatedUser: User): Observable<any> {
    return this.httpClient.post<any>(this.editUserUrl, updatedUser).pipe(
      tap(result => console.log('result : ', result)),
      map(result => {
        return result
      })
    )
  }

  deleteUser$(userId: any): Observable<any> {
    return this.httpClient.delete<any>(this.deleteUserUrl+userId).pipe(
      tap(result => console.log('result : ', result)),
      map(result => {
        console.log('result : ', result);
        return result
      })
    )
  }

}

