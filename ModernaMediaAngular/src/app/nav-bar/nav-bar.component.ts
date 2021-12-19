import { Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar.desktop.component.scss'],
})
export class NavBarComponent implements OnInit {
  public nav;
  public header;
  imageCdn = environment.img;
  textClass = '';
  mobileOpen = false;
  hidden = false;
  constructor(private elem: ElementRef, private location: Location) {}

  ngOnInit(): void {
    console.log(this.location.path());
    if (this.location.path() === '/blogg/utviklerl%C3%B8nn') {
      this.hidden = true;
    }
    if (this.location.path() === '') {
      this.textClass = 'dark-text';
    }
  }

  ngAfterViewInit() {
    this.nav = this.elem.nativeElement.querySelector('#navbar');
    this.header = this.elem.nativeElement.querySelector('header');
  }
  ContactUs(event) {
    alert('test');
  }
  Menu(event) {
    this.header.classList.toggle('mobile-open');
    if (this.header.clasList.contains('mobile-open')) {
      this.mobileOpen = true;
    } else {
      this.mobileOpen = false;
    }
  }
}
