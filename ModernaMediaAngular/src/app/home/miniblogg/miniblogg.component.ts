import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-miniblogg',
  templateUrl: './miniblogg.component.html',
  styleUrls: ['./miniblogg.component.scss','./miniblogg.desktop.component.scss']
})
export class MinibloggComponent implements OnInit {
  imageCdn = environment.img;
  constructor() { }

  ngOnInit(): void {
  }

}
