import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about.desktop.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  imageCdn = environment.img;
  ngOnInit(): void {}
}
