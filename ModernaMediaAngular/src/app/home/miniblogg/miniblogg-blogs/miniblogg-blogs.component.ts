import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniblogg-blogs',
  templateUrl: './miniblogg-blogs.component.html',
  styleUrls: ['./miniblogg-blogs.component.scss']
})
export class MinibloggBlogsComponent implements OnInit {

  @Input() src;
  @Input() title;
  @Input() content;
  @Input() href = '';
  @Input() alt;

  constructor() { }

  ngOnInit(): void {
  }

}
