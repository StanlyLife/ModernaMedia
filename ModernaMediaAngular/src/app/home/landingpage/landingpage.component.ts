import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss','./landingpage.desktop.component.scss']
})
export class LandingpageComponent implements OnInit {
  imageCdn = environment.img;
  constructor() { }

  public vw: any = 500;
  ngOnInit() {
      this.vw = window.innerWidth;
  }

}
