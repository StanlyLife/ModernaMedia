import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloggComponent } from './blogg/blogg.component';



@NgModule({
  declarations: [BloggComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'blogg', component: BloggComponent,data: {animation: "BloggPage"}},
    ])
  ]
})
export class BloggModule { }