import { Component, OnInit } from '@angular/core';
import { Assessment } from './assessment.model';
import { AssessmentsService } from './assessments.service';

declare interface TableData {
  headerRow: string[];
}


@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {
  public tableData1: TableData;
  assessments: Assessment[];


  constructor() {}

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['title', 'description', 'duration', 'tags', 'industries', 'premium', 'link'],
    };
  }
}
