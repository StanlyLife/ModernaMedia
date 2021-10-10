import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-and-text',
  templateUrl: './image-and-text.component.html',
  styleUrls: ['./image-and-text.component.scss']
})
export class ImageAndTextComponent implements OnInit {

  constructor() { }
  @Input() sectionStyle:string = 'dark';
  ngOnInit(): void {
  }

}
