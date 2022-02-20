import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.desktop.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  imageCdn = environment.img;
  ngOnInit(): void {}
}
