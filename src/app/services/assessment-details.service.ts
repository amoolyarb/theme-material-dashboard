import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';

@Injectable()
export class AssessmentDetailsService {
  AssessmentDetailsUrl = 'assets/assessment-details.json';

  constructor(private http: HttpClient) {}

  getAssessments() {
    return this.http.get(this.AssessmentDetailsUrl);
  }
}
