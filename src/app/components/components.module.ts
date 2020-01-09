import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { SubjectcardComponent } from './subjectcard/subjectcard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
   // SubjectcardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
   // SubjectcardComponent
  ]
})
export class ComponentsModule { }
