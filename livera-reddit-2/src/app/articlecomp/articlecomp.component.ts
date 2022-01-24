import { Component, OnInit, HostBinding  } from '@angular/core';
import { Article } from './articlecomp.model'; //Non cancellare gli altri import

@Component({
  selector: 'app-articlecomp',
  templateUrl: './articlecomp.component.html',
  styleUrls: ['./articlecomp.component.css']
})
export class ArticlecompComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  article:Article


  constructor(){
    this.article = new Article('Angular 2','http://angular.io',10);

  }

  voteUp():boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():boolean {
    this.article.voteDown();;
    return false;
  }

  ngOnInit() {}
}
