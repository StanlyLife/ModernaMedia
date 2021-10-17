import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', './banner.desktop.component.scss']
})
export class BannerComponent implements OnInit {
  imageCdn = environment.img;
  public UniqueSellingPoints = [
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "1Rakkett løsning",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "2Rakkett løsning",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "3Rakkett løsning",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "4Rakkett løsning",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "5Rakkett løsning",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "6Rakkett løsning",
      "content" : "Raske løsninger for raske briller Raske løsninger for"
    }
    
  ];

  @Input() sectionStyle:string = 'dark';
  @Input() IsVertical:boolean;


  constructor() { }


  ngOnInit(): void {
  }

}
