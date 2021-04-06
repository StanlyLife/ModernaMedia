import { throwError } from 'rxjs';
import { Component, ElementRef, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

public nav;

  constructor(
    private injector: Injector,
    private elem: ElementRef
    ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
     this.nav = this.elem.nativeElement.querySelector('#navbar');
  }

  public ToggleNav(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(target);
    this.nav.classList.toggle("display");
    target.classList.toggle("change");
  }

}
