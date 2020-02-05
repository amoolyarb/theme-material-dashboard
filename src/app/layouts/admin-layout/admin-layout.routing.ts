import { Routes } from '@angular/router';
import { DashboardComponent } from '@app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/pages/user-profile/user-profile.component';
import { TestLibraryComponent } from '@app/pages/test-library/test-library.component';
import { SubjectcardComponent } from '@app/components/subjectcard/subjectcard.component';
import { QuestionsComponent } from '@app/pages/questions/questions.component';
import { AssessmentDetailsComponent } from '@app/pages/assessment-details/assessment-details.component';
import { AddAssessmentsComponent } from '@app/pages/add-assessments/add-assessments.component';
import { CreateTestComponent } from '@app/pages/create-test/create-test.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',        component: UserProfileComponent },
    { path: 'subjectcard',    component: SubjectcardComponent },
    { path: 'test-library',   component: TestLibraryComponent },
    { path: 'subjectcard',    component: SubjectcardComponent },
    { path: 'questions',      component: QuestionsComponent },
    { path: 'assessment-details',   component: AssessmentDetailsComponent },
    { path: 'add-assessments',   component: AddAssessmentsComponent },
    { path: 'create-test',   component: CreateTestComponent }
    
    
];
