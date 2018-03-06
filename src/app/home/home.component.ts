import { Component, OnInit } from '@angular/core';

import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/article.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public articles: Article[];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getAll()
      .subscribe((articles: Article[]) => this.articles = articles);
  }
}
