import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    // console.log(this.location.path());
    if (this.location.path() === '/blogg/utviklerlonn') {
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
  ContactUs(event) {}
  Menu(event) {
    this.header.classList.toggle('mobile-open');
    this.mobileOpen = !this.mobileOpen;
  }
}
