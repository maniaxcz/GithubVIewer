import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {}

  getData(username:String):Observable<any>{

    let user = `https://api.github.com/users/${username}`;
    return this.http.get(user);
  }

  getRepositories(username:String):Observable<any>{
    let repos = `https://api.github.com/users/${username}/repos`;
    return this.http.get(repos);
  }

  getLanguages(username:String, repo:String):Observable<any>{
    let languages = `https://api.github.com/repos/${username}/${repo}/languages`;
    return this.http.get(languages);
  }
}
