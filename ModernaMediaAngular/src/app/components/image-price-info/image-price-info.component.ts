import { WindowRefService } from './../../services/window-ref.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-image-price-info',
  templateUrl: './image-price-info.component.html',
  styleUrls: [
    './image-price-info.component.scss',
    './image-price-info.desktop.component.scss',
  ],
})
export class ImagePriceInfoComponent implements OnInit {
  @Input() componentTheme = 'dark';
  imageCdn = environment.img;
  indexOne = 1;
  indexTwo = 2;
  activeIndex = this.indexOne;
  @ViewChild('one') elemOne: ElementRef;
  @ViewChild('two') elemTwo: ElementRef;

  public ContentOne = {};
  public ContentOneImageSrc =
    '../../../assets/Images/Components/usp-image-cards/Rammeverk for design.webp';
  public ContentTwo = {};
  public ContentTwoImageSrc =
    '../../../assets/Images/Components/usp-image-cards/Rammeverk for design.webp';

  //ContentTwo['imageSrc']

  @Input() Product;

  constructor(private elref: ElementRef, private wf: WindowRefService) {}

  public vw: any = 500;
  ngOnInit(): void {
    this.Product = JSON.parse(this.Product);
    this.vw =
      this.wf.nativeWindow.innerWidth < this.wf.nativeWindow.innerHeight
        ? this.wf.nativeWindow.innerHeight
        : this.wf.nativeWindow.innerWidth;
    this.ContentOne = this.Product[this.indexOne];
    this.ContentOneImageSrc = this.ContentOne['imageSrc'];

    this.ContentTwo = this.Product[this.indexTwo];
    this.ContentTwoImageSrc = this.ContentTwo['imageSrc'];
  }

  front;
  back;
  updateFrontAndBackElement() {
    this.front = this.elref.nativeElement.querySelector(
      '.product-section.front'
    );
    this.back = this.elref.nativeElement.querySelector('.product-section.back');
  }

  private RemoveTransitionClasses() {
    this.front.classList.remove('move-back');
    this.front.classList.remove('move-front');
    this.back.classList.remove('move-back');
    this.front.classList.remove('front');
    this.front.classList.remove('back');
    this.back.classList.remove('back');
    this.back.classList.remove('front');
    this.back.classList.remove('move-front');
  }

  moveNext() {
    const nextIndex = (this.activeIndex + 1) % this.Product.length;
    this.updateFrontAndBackElement();
    this.RemoveTransitionClasses();
    this.front.classList.add('move-back');
    this.front.classList.add('back');
    this.back.classList.add('move-front');
    this.back.classList.add('front');
    if (this.front.classList.contains('one')) {
      this.indexTwo, (this.activeIndex = nextIndex);
      this.ContentTwo = this.Product[this.activeIndex];
      this.ContentTwoImageSrc = this.ContentTwo['imageSrc'];
    } else if (this.front.classList.contains('two')) {
      this.indexOne, (this.activeIndex = nextIndex);
      this.ContentOne = this.Product[this.activeIndex];
      this.ContentOneImageSrc = this.ContentOne['imageSrc'];
    } else {
      alert('error');
    }
  }
  movePrevious() {
    const nextIndex = (this.activeIndex - 1) % this.Product.length;
    this.updateFrontAndBackElement();
    this.RemoveTransitionClasses();
    this.front.classList.add('move-back');
    this.front.classList.add('back');
    this.back.classList.add('move-front');
    this.back.classList.add('front');
    if (this.front.classList.contains('one')) {
      this.indexTwo, (this.activeIndex = nextIndex);
      this.ContentTwo = this.Product[this.activeIndex];
      this.ContentTwoImageSrc = this.ContentTwo['imageSrc'];
    } else if (this.front.classList.contains('two')) {
      this.indexOne, (this.activeIndex = nextIndex);
      this.ContentOne = this.Product[this.activeIndex];
      this.ContentOneImageSrc = this.ContentOne['imageSrc'];
    } else {
      alert('error');
    }
  }
}
