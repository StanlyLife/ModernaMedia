import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-blogg-thumbnail',
  templateUrl: './blogg-thumbnail.component.html',
  styleUrls: ['./blogg-thumbnail.component.scss']
})




export class BloggThumbnailComponent implements OnInit {

  @Input() src;
  @Input() title;
  @Input() content;
  @Input() href = '';
  @Input() alt;
  @Input() theme;

  imageCdn = environment.img;

  constructor() { }

  ngOnInit(): void {
  }

}
