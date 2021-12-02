import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperSalarayChartsComponent } from './developer-salaray-charts/developer-salaray-charts.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DeveloperSalarayChartsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxChartsModule,
    RouterModule.forRoot([
      {
        path: 'v/utviklerlonn',
        component: DeveloperSalarayChartsComponent,
        data: { animation: 'UtviklingPage' },
      },
    ]),
  ],
})
export class ToolsModule {}
