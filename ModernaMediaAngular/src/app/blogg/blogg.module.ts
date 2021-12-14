import { ComponentsModule } from './../components/components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggComponent } from './blogg/blogg.component';

@NgModule({
  declarations: [BloggComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot([{ path: 'blogg', component: BloggComponent }]),
  ],
})
export class BloggModule {}
