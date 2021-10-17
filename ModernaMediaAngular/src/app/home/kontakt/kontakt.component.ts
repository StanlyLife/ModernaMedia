import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss', './kontakt.desktop.component.scss']
})
export class KontaktComponent implements OnInit {
imageCdn = environment.img;
  constructor() { }

  public vw: any = 500;
  ngOnInit() {
      this.vw = window.innerWidth < window.innerHeight ? window.innerHeight : window.innerWidth;
  }

}
