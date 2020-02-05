import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/pages/user-profile/user-profile.component';
import { SubjectcardComponent } from '@app/components/subjectcard/subjectcard.component';
import { TestLibraryComponent } from '@app/pages/test-library/test-library.component';
import { QuestionsComponent } from '@app/pages/questions/questions.component';
import { QuestionsService } from '@app/pages/questions/questions.service';
import { AssessmentDetailsComponent } from '@app/pages/assessment-details/assessment-details.component';
import { AssessmentsService } from '@app/services/assessments.service';
import { AssessmentDetailsService } from '@app/services/assessment-details.service';
import { AddAssessmentsComponent } from '@app/pages/add-assessments/add-assessments.component';
import { CreateTestComponent } from '@app/pages/create-test/create-test.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

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
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TestLibraryComponent,
    SubjectcardComponent,
    QuestionsComponent,
    AssessmentDetailsComponent,
    AddAssessmentsComponent,
    CreateTestComponent
  ],
  providers: [
    QuestionsService,
    AssessmentDetailsService,
    AssessmentsService
  ]
})

export class AdminLayoutModule {}
