import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { NgForm } from '@angular/forms';
import { QuestionsService} from './questions.service';

declare interface TableData {
  headerRow: string[];
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  public tableData1: TableData;
  questions: Question[];
  deleteQues: any;

  constructor(private questionsService: QuestionsService) {}
  ngOnInit() {
    this.tableData1 = {
      headerRow: ['Title', 'Description', 'Answer Id', 'Answer', 'Answer Type', 'Action'],
    };
    this.showQuestions();
  }

  showQuestions() {
    this.questionsService.getQuestions().subscribe((data: Question[]) => this.questions = { ...data });
  }

  onSubmit(f: NgForm) {
    this.questions.push(f.value);
    console.log(this.questions);
  }

  deleteques(question) {
    this.deleteQues = this.questions.indexOf(question);
    this.questions.splice(this.deleteQues, 1);
  }
}
