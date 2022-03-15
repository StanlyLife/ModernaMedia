import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', './services.desktop.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  ngOnInit(): void {}
}
