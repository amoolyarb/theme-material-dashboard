import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class QuestionsService {
	questionsUrl = 'assets/questions.json';
	
	constructor(private http: HttpClient) {
	
	}

	getQuestions() {
		return this.http.get(this.questionsUrl);
	}
}
