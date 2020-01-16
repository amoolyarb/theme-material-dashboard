import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/pages/user-profile/user-profile.component';
import { TableListComponent } from '@app/table-list/table-list.component';
import { TypographyComponent } from '@app/typography/typography.component';
import { IconsComponent } from '@app/icons/icons.component';
import { UpgradeComponent } from '@app/upgrade/upgrade.component';
import { TestsComponent } from '@app/pages/tests/tests.component';
import { SubjectcardComponent } from '@app/components/subjectcard/subjectcard.component';
// import { AssessmentsComponent } from '@app/pages/assessments/assessments.component';
import { QuestionsComponent } from '@app/pages/questions/questions.component';
import { QuestionsService } from '@app/services/questions.service';

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
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    UpgradeComponent,
    TestsComponent,
    SubjectcardComponent,
    // AssessmentsComponent,
    QuestionsComponent,
  ],
  providers: [
    QuestionsService,
  ]
})

export class AdminLayoutModule {}
