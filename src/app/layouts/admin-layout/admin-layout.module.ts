import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'angular-crumbs';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/pages/user-profile/user-profile.component';
import { TestLibraryComponent } from '@app/pages/test-library/test-library.component';
import { SubjectcardComponent } from '@app/components/subjectcard/subjectcard.component';
import { AssessmentsComponent } from '@app/pages/assessments/assessments.component';
import { QuestionsComponent } from '@app/pages/questions/questions.component';
import { AddQuestionComponent } from '@app/pages/add-question/add-question.component';
import { QuestionDetailsComponent } from '@app/pages/question-details/question-details.component';
import { AnswersComponent } from '@app/pages/answers/answers.component';
import { AnswerDetailsComponent } from '@app/pages/answer-details/answer-details.component';
import { AddAssessmentComponent } from '@app/pages/add-assessment/add-assessment.component';
import { QuestionsService } from '@app/services/questions.service';
import { AnswersService } from '@app/services/answers.service';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { AssessmentsService } from '@app/services/assessments.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    BreadcrumbModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TestLibraryComponent,
    SubjectcardComponent,
    AssessmentsComponent,
    QuestionsComponent,
    AddQuestionComponent,
    QuestionDetailsComponent,
    AnswersComponent,
    AnswerDetailsComponent,
    AddAssessmentComponent,
  ],
  providers: [
    QuestionsService,
    AssessmentsService,
    AnswersService,
  ]
})

export class AdminLayoutModule {}
