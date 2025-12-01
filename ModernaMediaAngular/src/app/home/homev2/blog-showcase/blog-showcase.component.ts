import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import { Blogs } from 'src/utils/BlogUtils';
@Component({
  selector: 'app-blog-showcase',
  templateUrl: './blog-showcase.component.html',
  styleUrls: [
    './blog-showcase.component.scss',
    './blog-showcase.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class BlogShowcaseComponent {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  blogs = Blogs;
  imageCdn = environment.img;
}
