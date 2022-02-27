import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOComponent } from '../seo/seo.component';
import { DesignComponent } from '../design/design.component';
import { UtviklingComponent } from '../utvikling/utvikling.component';



@NgModule({
  declarations: [
    SEOComponent,
    DesignComponent,
    UtviklingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TjenesterModule { }
