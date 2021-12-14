import { WindowRefService } from './../../services/window-ref.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss', './kontakt.desktop.component.scss'],
})
export class KontaktComponent implements OnInit {
  imageCdn = environment.img;
  constructor(private wf: WindowRefService) {}

  public vw: any = 500;
  ngOnInit() {
    this.vw = this.wf.width < this.wf.height ? this.wf.height : this.wf.width;
  }
}
