import { Routes } from '@angular/router';

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

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',        component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'tests',          component: TestsComponent },
    { path: 'subjectcard',    component: SubjectcardComponent },
    // { path: 'assessments',    component: AssessmentsComponent },
    { path: 'questions',      component: QuestionsComponent },
];
