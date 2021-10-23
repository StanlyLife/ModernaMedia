import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.desktop.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  imageCdn = environment.img;
  ngOnInit(): void {
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
