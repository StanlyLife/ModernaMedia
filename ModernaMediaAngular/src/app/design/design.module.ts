import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoComponent } from './seo/seo.component';
import { DesignComponent } from './design/design.component';



@NgModule({
  declarations: [SeoComponent, DesignComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DesignModule { }
