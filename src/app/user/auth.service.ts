import { Injectable } from '@angular/core';
import { isBuffer } from 'util';
import { IUser } from './user.model';

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

  isAuthenticated() {
    return !! this.currentUser;
  }
}
