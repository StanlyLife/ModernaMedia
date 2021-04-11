import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtviklingComponent } from './utvikling/utvikling.component';



@NgModule({
  declarations: [UtviklingComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'utvikling', component: UtviklingComponent,data: {animation: "UtviklingPage"}},
    ])
  ]
})
export class UtviklingModule { }
