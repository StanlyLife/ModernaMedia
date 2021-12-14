import { WindowRefService } from './../../services/window-ref.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-omoss',
  templateUrl: './omoss.component.html',
  styleUrls: ['./omoss.component.scss', './omoss.desktop.component.scss'],
})
export class OmossComponent implements OnInit {
  constructor(private wf: WindowRefService) {}
  imageCdn = environment.img;

  public vw: any = 500;
  ngOnInit() {
    this.vw = this.wf.width < this.wf.height ? this.wf.height : this.wf.width;
  }
}
