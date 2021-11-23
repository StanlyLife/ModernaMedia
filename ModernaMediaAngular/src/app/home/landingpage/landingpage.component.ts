import { CTAMeetingService } from './../../services/ctameeting.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: [
    './landingpage.component.scss',
    './landingpage.desktop.component.scss',
  ],
})
export class LandingpageComponent implements OnInit {
  imageCdn = environment.img;
  constructor(private ctaService: CTAMeetingService) {}

  public vw: any = 500;

  ToggleCTA() {
    this.ctaService.ToggleModal();
  }

  ngOnInit() {
    this.vw =
      window.innerWidth < window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
  }
}
