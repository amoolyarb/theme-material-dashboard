import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Question } from '@app/models/question.model';
import { NgForm } from '@angular/forms';
import { QuestionsService } from '@app/services/questions.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  addquesForm = this.fb.group({
    subject: ['', Validators.required],
    topic: ['', Validators.required],
    question: ['', Validators.required],
    options: this.fb.array([
      this.fb.control('')
    ])
  });
questions: Question[];
  deleteRow: any;
  addquestions = [];
  delOption = [];

  constructor(private fb: FormBuilder, private questionsService: QuestionsService) { }

 ngOnInit() {
    this.loadQuestions();
  }

   get options() {
    return this.addquesForm.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this.fb.control(''));
  }
 deleteOpt(index){
      this.options.controls.splice(index, 1);
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
onSubmit1(f1: NgForm) {
      this.addquestions.push(f1.value);
      }

onSubmit2(f2: NgForm) {
      this.addquestions.push(f2.value);
      }
}
