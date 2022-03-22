import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WindowRefService } from './../services/window-ref.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.desktop.component.scss'],
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
