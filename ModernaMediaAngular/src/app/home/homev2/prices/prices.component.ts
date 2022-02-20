import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss', './prices.desktop.component.scss'],
})
export class PricesComponent implements OnInit {
  constructor() {}
  imageCdn = environment.img;
  ngOnInit(): void {}
}
