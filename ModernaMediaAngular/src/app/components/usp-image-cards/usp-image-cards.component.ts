import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usp-image-cards',
  templateUrl: './usp-image-cards.component.html',
  styleUrls: ['./usp-image-cards.component.scss', './usp-image-cards.desktop.component.scss']
})
export class UspImageCardsComponent implements OnInit {

  imageCdn = environment.img;
  @Input() Title ="Enda flere grunner for å <span>Digitalisere</span> med ModernaMedia";

  public UspCard = [
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Farge kombinasjoner for design.webp",
      'imageAlt' : "Alt tekst",
      'content' : "Alle våre nettsider bygges fra bunn, noe som vil si at vi kan lage ALT du vil ha innenfor teknologien og fysikkens lover",
      "title" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Norsk design for bedrift.webp",
      'imageAlt' : "Alt tekst",
      'content' : "Alle våre nettsider bygges fra bunn, noe som vil si at vi kan lage ALT du vil ha innenfor teknologien og fysikkens lover",
      "title" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Rammeverk for design.webp",
      'imageAlt' : "Alt tekst",
      'content' : "Alle våre nettsider bygges fra bunn, noe som vil si at vi kan lage ALT du vil ha innenfor teknologien og fysikkens lover",
      "title" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Samlet arbeid.webp",
      'imageAlt' : "Alt tekst",
      'title' : "4Rakkett løsning",
      "content" : "Raske løsninger for raske briller"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
