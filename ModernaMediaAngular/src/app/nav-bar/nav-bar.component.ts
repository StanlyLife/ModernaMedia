import { Location } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar.desktop.component.scss']
})
export class NavBarComponent implements OnInit {

public nav;
  imageCdn = environment.img;
  textClass = "";
  constructor(
    private elem: ElementRef,
    private location: Location
    ) {}


  ngOnInit(): void {
    console.log(this.location.path());
    if(this.location.path() === ''){
      this.textClass = "dark-text";
    }
  }

  ngAfterViewInit() {
     this.nav = this.elem.nativeElement.querySelector('#navbar');
  }
  ContactUs(event) {
    alert("test");
  }

}
