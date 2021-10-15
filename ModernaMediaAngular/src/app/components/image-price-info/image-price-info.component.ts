import { ImageAndTextComponent } from './../image-and-text/image-and-text.component';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-price-info',
  templateUrl: './image-price-info.component.html',
  styleUrls: ['./image-price-info.component.scss']
})
export class ImagePriceInfoComponent implements OnInit {
  @Input() componentTheme = 'dark';

  indexOne = 1;
  indexTwo = 2;
  activeIndex = this.indexOne;
  @ViewChild('one') elemOne: ElementRef;
  @ViewChild('two') elemTwo: ElementRef;

  public ContentOne = {};
  public ContentOneImageSrc = "../../../assets/Images/Components/usp-image-cards/Rammeverk for design.jpg";
  public ContentTwo = {};
  public ContentTwoImageSrc = "../../../assets/Images/Components/usp-image-cards/Rammeverk for design.jpg";

  //ContentTwo['imageSrc']

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
    {
      'Title': "MEDIUM BEDRIFT",
      'imageSrc': "../../../assets/Images/Components/Image-products-info/Barista.jpg",
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
    {
      'Title': "STOR BEDRIFT",
      'imageSrc': "../../../assets/Images/Components/usp-image-cards/Rammeverk for design.jpg",
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



  constructor(private elref: ElementRef) { }

  ngOnInit(): void {
    this.ContentOne = this.Product[this.indexOne]
    this.ContentOneImageSrc = this.ContentOne['imageSrc'];

    this.ContentTwo = this.Product[this.indexTwo]
    this.ContentTwoImageSrc = this.ContentTwo['imageSrc'];
  }

  front;
  back;
  updateFrontAndBackElement() {
    this.front = this.elref.nativeElement.querySelector(".product-section.front");
    this.back = this.elref.nativeElement.querySelector(".product-section.back");
  }

  private RemoveTransitionClasses() {
    this.front.classList.remove("move-back");
    this.front.classList.remove("move-front");
    this.back.classList.remove("move-back");
    this.front.classList.remove("front");
    this.front.classList.remove("back");
    this.back.classList.remove("back");
    this.back.classList.remove("front");
    this.back.classList.remove("move-front");
  }

  moveNext() {

    const nextIndex = (this.activeIndex + 1) % this.Product.length;
    this.updateFrontAndBackElement();
    this.RemoveTransitionClasses();
    this.front.classList.add("move-back");
    this.front.classList.add("back");
    this.back.classList.add("move-front");
    this.back.classList.add("front");
    if (this.front.classList.contains("one")) {
      this.indexTwo, this.activeIndex = nextIndex;
      this.ContentTwo = this.Product[this.activeIndex]
      this.ContentTwoImageSrc = this.ContentTwo['imageSrc'];
    } else if (this.front.classList.contains("two")) {
      this.indexOne, this.activeIndex = nextIndex;
      this.ContentOne = this.Product[this.activeIndex]
      this.ContentOneImageSrc = this.ContentOne['imageSrc'];
    } else {
      alert("error");
    }
  }
  movePrevious() {
    const nextIndex = (this.indexOne - 1) % this.Product.length;
    // this.index = (this.index - 1) % this.Product.length;
    this.updateFrontAndBackElement();
  }

}
