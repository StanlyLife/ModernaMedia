import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './landing.desktop.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}
  imageCdn = environment.img;
  ngOnInit(): void {}
}
