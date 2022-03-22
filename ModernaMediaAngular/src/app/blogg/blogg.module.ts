import { ComponentsModule } from './../components/components.module';
import { AboutYourNextProjectComponent } from './../components/about-your-next-project/about-your-next-project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggPageComponent } from './blogg-page/blogg-page.component';
import { BloggPostRestaurantHjemmesideComponent } from './blogg-post-restaurant-hjemmeside/blogg-post-restaurant-hjemmeside.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'blogg/hjemmeside-for-restaurant-bedrift',
    component: BloggPostRestaurantHjemmesideComponent,
  },
];
@NgModule({
  declarations: [BloggPageComponent, BloggPostRestaurantHjemmesideComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
})
export class BloggModule {}
