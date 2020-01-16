import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';

@Injectable()
export class AssessmentsService {
  assessmentsUrl = 'http://104.248.160.124/hl/api/v1/subjects.json';

  constructor(private http: HttpClient) {}

  getAssessments() {
    return this.http.get(this.assessmentsUrl);
  }
}
