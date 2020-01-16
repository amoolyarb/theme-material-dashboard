import { Component, OnInit } from '@angular/core';
import { Assessment } from './assessment.model';
import { AssessmentsService } from './assessments.service';

@Component({
  selector: 'hl-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})

export class AssessmentsComponent implements OnInit {
  assessments: Assessment[];

  constructor(private assessmentsService: AssessmentsService) {}

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['title', 'description', 'duration', 'tags', 'industries', 'premium', 'link'],
    };
    this.showassessments();
  }

  showassessments() {
    assessmentsService.getAssessments().subscribe((data: Assessment[]) => {
           const strAssessments = JSON.stringify(data);
           console.log(strAssessments);
         });
  }
}
