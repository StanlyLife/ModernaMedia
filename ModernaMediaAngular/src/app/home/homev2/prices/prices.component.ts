import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import { PriceUtils } from 'src/utils/PriceUtils';
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss', './prices.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PricesComponent {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  imageCdn = environment.img;
  Prices = PriceUtils;
}
