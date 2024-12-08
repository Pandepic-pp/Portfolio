import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'work-experience',
    loadChildren: () =>
      import('./modules/work-experience/work-experience.module').then(
        (m) => m.WorkExperienceModule
      ),
  },
  {
    path: 'achievements',
    loadChildren: () =>
      import('./modules/achievements/achievements.module').then(
        (m) => m.AchievementsModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: '**',
    loadChildren: () => 
      import('./modules/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
