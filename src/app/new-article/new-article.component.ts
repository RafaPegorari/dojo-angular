import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/article.service'

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {
    this.form = fb.group({
      bannerUrl: '',
      title: ['', [
        Validators.required,
        Validators.maxLength(200),
      ]],
      content: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if(!this.form.valid) {
      return;
    }

    this.articleService.create(this.form.value)
      .subscribe((article: Article) => {
        console.log(article);
        this.form.reset();
      });
  }
}
