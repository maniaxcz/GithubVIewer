import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){}

  // {observe: 'body', responseType: 'json'}

  title = 'GithubViewer';
  githubusername = '';

  setUsername(uid: string){
    this.githubusername = uid;
  }
  reload(){
    window.location.reload()
  }
}
