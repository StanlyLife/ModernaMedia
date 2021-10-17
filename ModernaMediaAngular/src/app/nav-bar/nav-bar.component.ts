import { environment } from './../../environments/environment.prod';
import { throwError } from 'rxjs';
import { Component, ElementRef, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar.desktop.component.scss']
})
export class NavBarComponent implements OnInit {

public nav;
  imageCdn = environment.img;
  constructor(
    private injector: Injector,
    private elem: ElementRef
    ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
     this.nav = this.elem.nativeElement.querySelector('#navbar');
  }
  ContactUs(event) {
    alert("test");
  }

}
