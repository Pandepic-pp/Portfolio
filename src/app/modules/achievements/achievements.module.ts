import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from './achievements.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AchievementsComponent
  }
]

@NgModule({
  declarations: [
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AchievementsComponent
  ]
})
export class AchievementsModule { }
