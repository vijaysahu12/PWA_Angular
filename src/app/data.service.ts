import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  GetSkillList() {
    return this.http.get('http://localhost:63023/api/rasetting/GetPrimarySkillList');
  }
}
