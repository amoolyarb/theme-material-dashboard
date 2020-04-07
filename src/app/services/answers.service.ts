import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';

@Injectable()
export class AnswersService {
  answersUrl = 'assets/answers.json';

  constructor(private http: HttpClient) {}

  getAnswers() {
return this.http.get(this.answersUrl);
  }
}
