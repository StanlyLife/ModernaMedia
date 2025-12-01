import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about-your-next-project',
  templateUrl: './about-your-next-project.component.html',
  styleUrls: [
    './about-your-next-project.component.scss',
    './about-your-next-project.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule],
})
export class AboutYourNextProjectComponent {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  imageCdn = environment.img;
}
