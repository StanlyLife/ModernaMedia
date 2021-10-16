import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-and-image',
  templateUrl: './info-and-image.component.html',
  styleUrls: ['./info-and-image.component.scss', './info-and-image.desktop.component.scss']
})
export class InfoAndImageComponent implements OnInit {

  constructor() { }
  @Input() sectionStyle:string = 'light';
  ngOnInit(): void {
  }

}
