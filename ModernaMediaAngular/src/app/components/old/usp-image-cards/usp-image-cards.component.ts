import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-usp-image-cards',
  templateUrl: './usp-image-cards.component.html',
  styleUrls: ['./usp-image-cards.component.scss', './usp-image-cards.desktop.component.scss']
})
export class UspImageCardsComponent implements OnInit {

  imageCdn = environment.img;
  @Input() Titlee ="Ingen tekst satt";

  @Input() UspCard;


  constructor() { }

  ngOnInit(): void {
    this.UspCard = JSON.parse(this.UspCard);
  }

}
