import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-your-next-project',
  templateUrl: './about-your-next-project.component.html',
  styleUrls: [
    './about-your-next-project.component.scss',
    './about-your-next-project.desktop.component.scss',
  ],
})
export class AboutYourNextProjectComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  imageCdn = environment.img;
  ngOnInit(): void {}
}
