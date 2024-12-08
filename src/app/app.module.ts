import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { WorkExperienceModule } from './modules/work-experience/work-experience.module';
import { AchievementsModule } from './modules/achievements/achievements.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    WorkExperienceModule,
    AchievementsModule,
    ProjectsModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
