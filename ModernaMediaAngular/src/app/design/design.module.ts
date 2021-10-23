import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { DesignComponent } from './design/design.component';



@NgModule({
  declarations: [DesignComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot([
      {path: 'design', component: DesignComponent,data: {animation: "designPage"}},
    ])
  ]
})
export class DesignModule { }
