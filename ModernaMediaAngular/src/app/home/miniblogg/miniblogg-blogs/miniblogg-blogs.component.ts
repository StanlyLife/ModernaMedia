import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment.prod';

@Component({
  selector: 'app-miniblogg-blogs',
  templateUrl: './miniblogg-blogs.component.html',
  styleUrls: ['./miniblogg-blogs.component.scss', './miniblogg-blogs.desktop.component.scss']
})
export class MinibloggBlogsComponent implements OnInit {

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
