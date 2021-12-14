import { WindowRefService } from './../../services/window-ref.service';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', './banner.desktop.component.scss'],
})
export class BannerComponent implements OnInit {
  imageCdn = environment.img;
  @Input() Titlee =
    "<span>Nettsider</span><span>for</span><span class='blue-text'>bedrifter</span>";
  @Input() UniqueSellingPoints;
  // = [
  //   {
  //     'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
  //     'title' : "1Rakkett løsning",
  //     "content" : "Raske løsninger for raske briller"
  //   },
  //   {
  //     'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
  //     'title' : "2Rakkett løsning",
  //     "content" : "Raske løsninger for raske briller"
  //   },
  //   {
  //     'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
  //     'title' : "3Rakkett løsning",
  //     "content" : "Raske løsninger for raske briller"
  //   },
  //   {
  //     'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
  //     'title' : "4Rakkett løsning",
  //     "content" : "Raske løsninger for raske briller"
  //   },
  //   {
  //     'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
  //     'title' : "5Rakkett løsning",
  //     "content" : "Raske løsninger for raske briller"
  //   },
  //   {
  //     'icon' : "../../../assets/Images/Icons/rocket-9959.svg",
  //     'title' : "6Rakkett løsning",
  //     "content" : "Raske løsninger for raske briller Raske løsninger for"
  //   }

  // ];

  @Input() sectionStyle: string = 'dark';
  @Input() IsVertical: boolean;
  @Input() ImageSrc: string =
    '../../../assets/Images/Utvikling/Utvikling/Web utvikling oslo.webp';
  @Input() uspColor: string;
  @Input() ComponentTheme: string;
  @Input() altText: string;

  constructor(private wf: WindowRefService) {}

  public vw: any = 1000;
  ngOnInit() {
    this.vw =
      this.wf.nativeWindow.innerWidth < this.wf.nativeWindow.innerHeight
        ? this.wf.nativeWindow.innerHeight
        : this.wf.nativeWindow.innerWidth;
    this.UniqueSellingPoints = JSON.parse(this.UniqueSellingPoints);
    console.log(this.UniqueSellingPoints);
  }
}
