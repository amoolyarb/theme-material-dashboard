import { Component, OnInit } from '@angular/core';
import { Answer } from '@app/models/answer.model';
import { NgForm } from '@angular/forms';
import { AnswersService } from '@app/services/answers.service';

@Component({
  selector: 'hl-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})

export class AnswersComponent implements OnInit {
  answers: Answer[];
   addquestions = [];

  constructor(private answersService: AnswersService) {}

  ngOnInit() {
    this.loadAnswers();
  }

  loadAnswers() {
    this.answersService.getAnswers()
        .subscribe((data: Answer[]) => {
          this.answers = data;
        });
  }
  onSubmit(f: NgForm) {
      this.addquestions.push(f.value);
      console.log(this.addquestions);
      }
}
