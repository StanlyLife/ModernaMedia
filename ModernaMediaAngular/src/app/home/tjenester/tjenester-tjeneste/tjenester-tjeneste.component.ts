import { environment } from './../../../../environments/environment.prod';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjenester-tjeneste',
  templateUrl: './tjenester-tjeneste.component.html',
  styleUrls: ['./tjenester-tjeneste.component.scss','./tjenester-tjeneste.desktop.component.scss']
})
export class TjenesterTjenesteComponent implements OnInit {
imageCdn = environment.img;
  @Input() src;
  @Input() title;
  @Input() content;
  @Input() href;
  @Input() icon;
  @Input() alt;

  constructor() { }

  ngOnInit(): void {
  }

}
