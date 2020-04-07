import { Routes } from '@angular/router';
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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent, data: { breadcrumb: 'Dashboard'}},
    { path: 'profile',          component: UserProfileComponent, data: { breadcrumb: 'Profile'} },
    { path: 'test-library',     component: TestLibraryComponent, data: { breadcrumb: 'Test Library'} },
    { path: 'subjectcard',      component: SubjectcardComponent},
    { path: 'assessments',      component: AssessmentsComponent, data: { breadcrumb: 'Assessments'} },
    { path: 'questions',        component: QuestionsComponent, data: { breadcrumb: 'Questions'} },
    { path: 'add-question',     component: AddQuestionComponent, data: { breadcrumb: 'Add Questions'} },
    { path: 'question-details', component: QuestionDetailsComponent, data: { breadcrumb: 'Question Details'} },
    { path: 'answers',  	    component: AnswersComponent, data: { breadcrumb: 'Answers'} },
    { path: 'answer-details',   component: AnswerDetailsComponent, data: { breadcrumb: 'Answer Details'}},
    { path: 'add-assessment',   component: AddAssessmentComponent, data: { breadcrumb: 'Add Assessments'}},
];
