import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoComponent } from './seo/seo.component';



@NgModule({
  declarations: [SeoComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SeoModule { }
