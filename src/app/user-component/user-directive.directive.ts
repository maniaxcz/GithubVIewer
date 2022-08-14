import { Directive, EventEmitter, Output } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Directive({
  selector: '[onCall]'
})
export class UserDirectiveDirective {

  // @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor(private githubUser:UserDataService) { }

  langs:Array<any> = [];
  username:String = '';
  repoName:String = '';

  setValues(user:String, repo:String){
    this.username = user;
    this.repoName = repo;
  }
  languagesUsed(){
    this.githubUser.getLanguages(this.username, this.repoName).subscribe((languages)=>{
      // console.log(Object.keys(languages));
      this.langs = Array.from(Object.keys(languages));
    })
    return this.langs;
  }

  ngOnInit() {
    this.languagesUsed();
}

}
