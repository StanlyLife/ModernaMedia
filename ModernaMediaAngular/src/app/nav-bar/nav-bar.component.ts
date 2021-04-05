import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(
    private injector: Injector
    ) {}

  ngOnInit(): void {
  }

  public ToggleNav(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(target);
    target.classList.toggle("change");
  }

}
