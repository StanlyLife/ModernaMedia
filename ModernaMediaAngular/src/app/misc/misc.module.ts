import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignsystemComponent } from './designsystem/designsystem.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'misc/designsystem', component: DesignsystemComponent },
];
@NgModule({
  declarations: [DesignsystemComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class MiscModule {}
