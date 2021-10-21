import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-and-image',
  templateUrl: './info-and-image.component.html',
  styleUrls: ['./info-and-image.component.scss', './info-and-image.desktop.component.scss']
})
export class InfoAndImageComponent implements OnInit {

  imageCdn = environment.img;
  constructor() { }
  @Input() sectionStyle:string = 'light';
  @Input() content:string;
  @Input() Titlee:string;
  @Input() src:string;
  @Input() alt:string;
  ngOnInit(): void {
  }

}
