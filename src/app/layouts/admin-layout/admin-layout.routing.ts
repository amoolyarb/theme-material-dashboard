import { Routes } from '@angular/router';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/pages/user-profile/user-profile.component';
import { TestsComponent } from '@app/pages/tests/tests.component';
import { TestLibraryComponent } from '@app/pages/test-library/test-library.component';
import { SubjectcardComponent } from '@app/components/subjectcard/subjectcard.component';
import { AssessmentsComponent } from '@app/pages/assessments/assessments.component';
import { QuestionsComponent } from '@app/pages/questions/questions.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',        component: UserProfileComponent },
    { path: 'tests',          component: TestsComponent },
    { path: 'subjectcard',    component: SubjectcardComponent },
    { path: 'test-library',   component: TestLibraryComponent },
    { path: 'subjectcard',    component: SubjectcardComponent },
    { path: 'assessments',    component: AssessmentsComponent },
    { path: 'questions',      component: QuestionsComponent },
    { path: 'assessments',    component: AssessmentsComponent }
];
