import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {

/*  meeting:
http://localhost:3000/api/mt/meeting/update/5fc2416384ed1e339464521c
http://localhost:3000/api/mt/meeting/getone/5fc2416384ed1e339464521c
'http://localhost:3000/api/mt/meeting/getall/byuser/5fc23cd90f518737e028180e'
'http://localhost:3000/api/mt/meeting/add/5fc23cd90f518737e028180e'
'http://localhost:3000/api/mt/meeting/all'
 */

update_mt_API = 'http://localhost:3000/api/mt/meeting/update/'; // meeting_id
get_one_mt_API = 'http://localhost:3000/api/mt/meeting/getone/'; // meeting_id
get_all_byUserAPI = 'http://localhost:3000/api/mt/meeting/getall/byuser/'; // user_id
create_mt_by_userAPI = 'http://localhost:3000/api/mt/meeting/add/'; // user_id
get_all_mt = 'http://localhost:3000/api/mt/meeting/all';

  constructor(private http: HttpClient) { }


   //
  async getAll()
  {
    return await this.http.get(this.get_all_mt);
  }
//
async getOneByMTId(id: any)
{
  return await this.http.get(this.get_one_mt_API + id);
}
//
async updateOne(id: any, data: any)
{
  return await this.http.get(this.update_mt_API + id,  data);
}
async getAllByUser(id: any)
{
  return await this.http.get(this.get_all_byUserAPI + id);
}
async createOne(id: any, data: any)
{
  return await this.http.post(this.create_mt_by_userAPI + id, data);
}
