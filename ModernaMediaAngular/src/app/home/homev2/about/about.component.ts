import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AboutComponent {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  imageCdn = environment.img;
}
