import { Injectable } from '@angular/core';
import { isBuffer } from 'util';
import { IUser } from './user.model';
import { last } from 'rxjs/operators';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
      this.currentUser = {
        id: 1,
        userName,
        firstName: 'Qiang',
        lastName: 'Li'
      };
  }
  updateCurrentUser(firstName: string, lastName: string) {
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName;
  }
  isAuthenticated() {
    return !! this.currentUser;
  }
}
