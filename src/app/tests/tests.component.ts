import { Component, OnInit } from '@angular/core';

declare interface Subject {
	id: number,
	title: string,
	icon: string
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  subjects: Subject[];

  constructor() { }

  ngOnInit() {
  	this.subjects = [
  		{ id: 1, title: 'Anaesthesia', icon: 'fa-industry' },
  		{ id: 1, title: 'Anatomy and Physiology', icon: 'fa-industry' },
  	]
  }

}
