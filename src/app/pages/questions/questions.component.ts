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
  deleteRow: any;
  addquestions = [];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionsService.getQuestions()
        .subscribe((data: Question[]) => {
          this.questions = data;
        });
  }

  deleteQuestions(row) {
    const answer = window.confirm('Delete Row?')
    if (answer) {
      this.deleteRow = this.questions.indexOf(row);
      this.questions.splice(this.deleteRow, 1);
    }
  }

  deleteQuestions1(row) {
    const answer = window.confirm('Delete Row?')
    if (answer) {
      this.deleteRow = this.addquestions.indexOf(row);
      this.addquestions.splice(this.deleteRow, 1);
    }
  }

   onSubmit(f: NgForm) {
      this.addquestions.push(f.value);
      console.log(this.addquestions);
      }
}
