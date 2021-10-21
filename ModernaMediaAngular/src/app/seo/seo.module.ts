import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoComponent } from './seo/seo.component';



@NgModule({
  declarations: [SeoComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot([
      {path: 'seo', component: SeoComponent,data: {animation: "seoPage"}},
    ])
  ]
})
export class SeoModule { }
