import { ToastService } from './../../services/toast.service';
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
  constructor(
    private ctaService: CTAMeetingService,
    private toast: ToastService
  ) {}

  public vw: any = 500;

  ToggleCTA() {
    this.toast.Toast('Hello', 'This is content', 'Default', 2500);
    this.ctaService.ToggleModal();
  }

  ngOnInit() {
    this.vw =
      window.innerWidth < window.innerHeight
        ? window.innerHeight
        : window.innerWidth;
  }
}
