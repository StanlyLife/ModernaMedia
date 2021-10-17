import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss', './kontakt.desktop.component.scss']
})
export class KontaktComponent implements OnInit {
imageCdn = environment.img;
  constructor() { }

  ngOnInit(): void {
  }

}
