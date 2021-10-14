import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-price-info',
  templateUrl: './image-price-info.component.html',
  styleUrls: ['./image-price-info.component.scss']
})
export class ImagePriceInfoComponent implements OnInit {
  @Input() componentTheme = 'dark';

  public Product = [
    {
      'Title': "LITEN BEDRIFT",
      'imageSrc': "../../../assets/Images/Components/usp-image-cards/Farge kombinasjoner for design.jpg",
      'imageAlt': "Alt tekst",
      'Subtitle': "Vi tar ikke betalt før produktet er ferdig, på denne måten er du helt <span>fornøyd</span>, helt <span>risikofritt</span>",
      "Content": "transmitting quantify navigating the card won't do anything, we need to transmit the optical PCI sensor! calculate The HDD driver is down, back up the cross-platform interface so we can override the RSS system! Use the mobile XML microchip, then you can copy the back-end program! You can't connect the sensor without backing up the bluetooth HTTP hard drive! transmitting the system won't do anything, we need to input the 1080p THX program! Try to navigate the PNG port, maybe it will input the online program! I'll hack the 1080p CSS firewall, that should transmitter the PCI monitor! backing up You can't input the program without synthesizing the bluetooth FTP capacitor! ",
      "Icons": [
        {
          "IconSrc": "../../../assets/Images/Icons/rocket-9959.svg",
          "IconAlt": "Icon alt text",
          "IconTitle": "Pris",
          "IconContent": ["Etablering fra 1.000kr", "fra 500kr per måned"]
        },
        {
          "IconSrc": "../../../assets/Images/Icons/rocket-9959.svg",
          "IconAlt": "Icon alt text",
          "IconTitle": "Pris",
          "IconContent": ["Etablering fra 1.000kr", "fra 500kr per måned"]
        },
        {
          "IconSrc": "../../../assets/Images/Icons/rocket-9959.svg",
          "IconAlt": "Icon alt text",
          "IconTitle": "Pris",
          "IconContent": ["Etablering fra 1.000kr", "fra 500kr per måned"]
        },
      ]
    },

  ];



  constructor() { }

  ngOnInit(): void {
  }

}
