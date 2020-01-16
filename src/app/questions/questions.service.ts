import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class QuestionsService {
	
	constructor(private http: HttpClient) {}
	questionsUrl = 'assets/questions.json';
	getQuestions() {
		return this.http.get(this.questionsUrl);
	}
}
