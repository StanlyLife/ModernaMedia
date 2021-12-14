import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { UtviklingComponent } from './utvikling/utvikling.component';

@NgModule({
  declarations: [UtviklingComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot([
      { path: 'utvikling', component: UtviklingComponent },
    ]),
  ],
})
export class UtviklingModule {}
