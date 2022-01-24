import { Component, OnInit, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-articlecomp',
  templateUrl: './articlecomp.component.html',
  styleUrls: ['./articlecomp.component.css']
})
export class ArticlecompComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  votes: number;
  title: string;
  link: string;

  constructor(){
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp():boolean {
    this.votes += 1;
    return false;
  }

  voteDown():boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {}
}
