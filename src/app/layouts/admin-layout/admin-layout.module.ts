import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/pages/user-profile/user-profile.component';
import { TestLibraryComponent } from '@app/pages/test-library/test-library.component';
import { SubjectcardComponent } from '@app/components/subjectcard/subjectcard.component';
import { AssessmentsComponent } from '@app/pages/assessments/assessments.component';
import { QuestionsComponent } from '@app/pages/questions/questions.component';
import { QuestionsService } from '@app/pages/questions/questions.service';
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
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TestLibraryComponent,
    SubjectcardComponent,
    AssessmentsComponent,
    QuestionsComponent,
  ],
  providers: [
    QuestionsService,
    AssessmentsService
  ]
})

export class AdminLayoutModule {}
