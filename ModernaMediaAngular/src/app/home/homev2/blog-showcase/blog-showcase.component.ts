import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-blog-showcase',
  templateUrl: './blog-showcase.component.html',
  styleUrls: [
    './blog-showcase.component.scss',
    './blog-showcase.desktop.component.scss',
  ],
})
export class BlogShowcaseComponent implements OnInit {
  constructor() {}
  imageCdn = environment.img;
  ngOnInit(): void {}
}
