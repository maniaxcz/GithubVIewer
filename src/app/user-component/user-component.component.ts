import { Component, Directive, Input, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})

export class UserComponentComponent implements OnInit {

  @Input() username:any;
  
  constructor(private githubUser:UserDataService, public loaderService:LoaderService) { }
  
  repos:Array<any> = [];
  avatar:any;
  name:String = '';
  location:String = '';
  bio:String = '';
  twitter:String = ''; 
  github:String = '';
  totalRecords = 0;
  page = 1;

  

  getUser(){
    this.githubUser.getData(this.username).subscribe((data)=>{
        //console.log(data);

        this.avatar = data.avatar_url;
        this.name = data.name;
        this.location = data.location;
        this.bio = data.bio;
        this.twitter = `https://twitter.com/${data.twitter_username}`;
        this.github = `https://github.com/${data.login}`;
    })
  }
  
  getRepos(){
    this.githubUser.getRepositories(this.username).subscribe((repos:Array<any>)=>{
        repos.forEach(repo => {
            this.githubUser.getLanguages(this.username,repo.name).subscribe((langs)=>{
                repo.language = langs;
            })
        });
        this.repos = repos;
        this.totalRecords = repos.length;
        console.log(repos);
      })
}

//   languagesUsed(repoName:any){
//       this.githubUser.getLanguages(this.username, repoName).subscribe((languages)=>{
//         console.log(Object.keys(languages));
//         this.langs = [...(Object.keys(languages))];
//         console.log(this.langs);
//       })
// }

    ngOnInit(): any{
      this.getUser();
      this.getRepos();
    }

  }

