import { Component, OnInit } from '@angular/core';
import { AssessmentDetails } from '@app/models/assessment-details.model';
import { AssessmentDetailsService } from '@app/services/assessment-details.service';

@Component({
  selector: 'hl-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.scss']
})  
export class AssessmentDetailsComponent implements OnInit {
	 AssessmentDetails: AssessmentDetails[];

  constructor(private assessmentsService: AssessmentDetailsService) { }

  ngOnInit() {
  	this.loadAssessmentDetails();
  }
  loadAssessmentDetails() {
     this.assessmentsService.getAssessments()
        .subscribe((results: AssessmentDetails[]) => {
          this.AssessmentDetails = results;
          console.log(this.AssessmentDetails);
        });
  }

}
