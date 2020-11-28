import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // user:
  // http://localhost:3000/api/usr/user/getone/5fc23cd90f518737e028180e
  // http://localhost:3000/api/usr/user/add
  // 'http://localhost:3000/api/usr/user/login'

  registerUsrUrl = 'http://localhost:3000/api/usr/user/add';
  loginUrl = 'http://localhost:3000/api/usr/user/login';
  getUserUrl = 'http://localhost:3000/api/usr/user/getone/';

  constructor(private http: HttpClient) { }

  //
  async register(data: any) {
    return this.http.post(this.registerUsrUrl, data);
  }
//
  async login(userName: any, password: any) {
    const data = {
      userName: userName,
       password: password
      };

    return this.http.post(this.loginUrl, data);
  }
//
async getUser(id: any) {
  return this.http.get(this.getUserUrl + id);
}




}
