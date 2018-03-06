import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

import { Article } from '../models/article';

@Injectable()
export class ArticleService {

  constructor(private readonly http: HttpClient) { }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.baseUrl}/article`)
  }

  public create(article: Article): Observable<Article> {
    return this.http.post<Article>(`${environment.baseUrl}/article`, article);
  }
}
