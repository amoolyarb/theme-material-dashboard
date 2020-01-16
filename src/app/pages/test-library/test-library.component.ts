import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '@app/services/assessments.service';
import { Subject } from '@app/models/subject.model';

@Component({
  selector: 'hl-tests',
  templateUrl: './test-library.component.html',
  styleUrls: ['./test-library.component.scss']
})

export class TestLibraryComponent implements OnInit {
  subjects: Subject[];

  constructor(private assessmentsService: AssessmentsService) {}

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.assessmentsService.getAssessments()
        .subscribe((results: Subject[]) => {
          this.subjects = results;
        });
  }
}
