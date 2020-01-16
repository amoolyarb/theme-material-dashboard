/**
 * HighLearner @viewwiser.com
 * Dependency modules
 */
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '@app/models/subject.model';

@Component({
  selector: 'hl-subjectcard',
  templateUrl: './subjectcard.component.html',
  styleUrls: ['./subjectcard.component.scss']
})

export class SubjectcardComponent implements OnInit {
  @Input() subject: Subject;

  constructor() {}

  ngOnInit() {}
}
