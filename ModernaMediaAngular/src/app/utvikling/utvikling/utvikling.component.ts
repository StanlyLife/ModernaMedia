import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utvikling',
  templateUrl: './utvikling.component.html',
  styleUrls: ['./utvikling.component.scss']
})
export class UtviklingComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
    ) {
      title.setTitle("Utvikling av nettsider og system for bedrifter");
    }

   ngOnInit() {
     this.seo.createLinkForCanonicalURL();
     this.meta.addTags([
       {name: "description", content: "Moderna Media utvikler nettsider og system for bedrifter som ønsker et eget nettsted, et tilpasset system eller en egen app"},
       {name: 'robots', content: 'index, follow'}
     ]);
     this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia'
    });
  }
  UniqueSellingPoints = [
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "1Rakkett Design",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "2Rakkett Design",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "3Rakkett Design",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "4Rakkett Design",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "5Rakkett Design",
      "content" : "Raske løsninger for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'title' : "6Rakkett Design",
      "content" : "Raske løsninger for raske briller Raske løsninger for"
    }
    
  ];

  UspCard = [
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Farge kombinasjoner for design.webp",
      'imageAlt' : "Alt tekst",
      'content' : "Alle våre nettsider bygges fra bunn, noe som vil si at vi kan lage ALT du vil ha innenfor teknologien og fysikkens lover",
      "title" : "Raske Design for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Norsk design for bedrift.webp",
      'imageAlt' : "Alt tekst",
      'content' : "Alle våre nettsider bygges fra bunn, noe som vil si at vi kan lage ALT du vil ha innenfor teknologien og fysikkens lover",
      "title" : "Raske Design for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Rammeverk for design.webp",
      'imageAlt' : "Alt tekst",
      'content' : "Alle våre nettsider bygges fra bunn, noe som vil si at vi kan lage ALT du vil ha innenfor teknologien og fysikkens lover",
      "title" : "Raske Design for raske briller"
    },
    {
      'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
      'imageSrc' : "../../../assets/Images/Components/usp-image-cards/Samlet arbeid.webp",
      'imageAlt' : "Alt tekst",
      'title' : "4Rakkett løsning",
      "content" : "Raske Design for raske briller"
    }
  ];
  textColor = "blue-text";
  Product = [
    {
      'Title': "LITEN BEDRIFT",
      'imageSrc': "../../../assets/Images/Components/usp-image-cards/Farge kombinasjoner for design.webp",
      'imageAlt': "Alt tekst",
      'Subtitle': `Vi tar ikke betalt før produktet er ferdig, på denne måten er du helt <span class="${this.textColor}">fornøyd</span>, helt <span>risikofritt</span>`,
      "Content": "Vi utvikler nettsider og systemer for bedrifter av alle størrelser. En mindre bedrift har like stort behov for en nettside som en stor bedrift, men har ikke behov for en nettside av samme størrelse som en større bedrift",
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
    {
      'Title': "MEDIUM BEDRIFT",
      'imageSrc': "../../../assets/Images/Components/Image-products-info/Barista.webp",
      'imageAlt': "Alt tekst",
      'Subtitle': `Vi tar ikke betalt før produktet er ferdig, på denne måten er du helt <span class="${this.textColor}">fornøyd</span>, helt <span>risikofritt</span>`,
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
    {
      'Title': "STOR BEDRIFT",
      'imageSrc': "../../../assets/Images/Components/usp-image-cards/Rammeverk for design.webp",
      'imageAlt': "Alt tekst",
      'Subtitle': `Vi tar ikke betalt før produktet er ferdig, på denne måten er du helt <span class="${this.textColor}">fornøyd</span>, helt <span>risikofritt</span>`,
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

}
