import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AssessmentsService {
assessmentsUrl = 'assets/assessments.json';

constructor(private http: HttpClient) {

}

getAssessments() {
return this.http.get(this.assessmentsUrl);
}
}
