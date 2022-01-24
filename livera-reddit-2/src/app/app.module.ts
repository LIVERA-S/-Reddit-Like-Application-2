import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Article } from './article.component/article.component.component';
import { ArticlecompComponent } from './articlecomp/articlecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    Article.ComponentComponent,
    ArticlecompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
