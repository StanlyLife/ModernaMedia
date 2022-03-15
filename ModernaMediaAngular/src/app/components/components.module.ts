import { environment } from './../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { AuthorComponent } from './author/author.component';
import { AboutYourNextProjectComponent } from './about-your-next-project/about-your-next-project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ToastComponent,
    AuthorComponent,
    AboutYourNextProjectComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ToastComponent, AuthorComponent, AboutYourNextProjectComponent],
})
export class ComponentsModule {
  public imageCdn = environment.img;
}
