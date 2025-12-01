import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from './../../environments/environment.prod';
import { WindowRefService } from './../services/window-ref.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent implements OnInit {
  constructor(
    private wf: WindowRefService,
    private location: Location,
    private sanitizer: DomSanitizer,
    private _renderer2: Renderer2
  ) {}
  imageCdn = environment.img;
  hidden = false;
  ngOnInit(): void {
    if (this.location.path() === '/blogg/utviklerlonn') {
      this.hidden = true;
    }
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
