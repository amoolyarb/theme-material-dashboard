/**
 * HighLearner @viewwiser.com
 * Dependency modules
 */
import { Component, OnInit } from '@angular/core';
import { Assessment } from '@app/models/assessment.model';
import { AssessmentsService } from '@app/services/assessments.service';

@Component({
  selector: 'hl-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})

export class AssessmentsComponent implements OnInit {
  assessments: Assessment[];

  constructor(private assessmentsService: AssessmentsService) {}

  ngOnInit() {
<<<<<<< HEAD
    }
  }
=======
    this.showassessments();
  }

  showassessments() {
    this.assessmentsService.getAssessments().subscribe((data: Assessment[]) => {
           const strAssessments = JSON.stringify(data);
           console.log(strAssessments);
         });
  }
}
>>>>>>> develop
