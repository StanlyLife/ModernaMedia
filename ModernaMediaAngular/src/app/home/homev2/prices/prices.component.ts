import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PriceUtils } from 'src/utils/PriceUtils';
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss', './prices.desktop.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class PricesComponent {
  Prices = PriceUtils;
}
