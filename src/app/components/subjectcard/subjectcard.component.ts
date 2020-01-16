/**
 * HighLearner @viewwiser.com
 * Dependency modules
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hl-subjectcard',
  templateUrl: './subjectcard.component.html',
  styleUrls: ['./subjectcard.component.scss']
})

export class SubjectcardComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
