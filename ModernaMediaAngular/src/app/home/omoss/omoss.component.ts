import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-omoss',
  templateUrl: './omoss.component.html',
  styleUrls: ['./omoss.component.scss','./omoss.desktop.component.scss']
})
export class OmossComponent implements OnInit {

  constructor() { }
  imageCdn = environment.img;

  public vw: any = 500;
  ngOnInit() {
      this.vw = window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth;
  }

}
