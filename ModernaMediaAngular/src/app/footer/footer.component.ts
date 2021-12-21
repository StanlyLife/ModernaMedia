import { WindowRefService } from './../services/window-ref.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.desktop.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private wf: WindowRefService, private location: Location) {}
  imageCdn = environment.img;
  hidden = false;
  ngOnInit(): void {
    if (this.location.path() === '/blogg/utviklerlonn') {
      this.hidden = true;
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
