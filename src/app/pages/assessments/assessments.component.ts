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

  ngOnInit() {}
}
