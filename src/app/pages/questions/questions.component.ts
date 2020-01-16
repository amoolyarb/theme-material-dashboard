import { Component, OnInit } from '@angular/core';
import { Question } from '@app/models/question.model';
import { NgForm } from '@angular/forms';
import { QuestionsService } from '@app/services/questions.service';

@Component({
  selector: 'hl-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  questions: Question[];
  deleteQues: any;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionsService.getQuestions()
      .subscribe((data: Question[]) => this.questions = { ...data });
  }

  deleteques(question) {
    this.deleteQues = this.questions.indexOf(question);
    this.questions.splice(this.deleteQues, 1);
  }
}
