import { WindowRefService } from './../../services/window-ref.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-tjenester',
  templateUrl: './tjenester.component.html',
  styleUrls: [
    './tjenester.component.scss',
    './tjenester.desktop.component.scss',
  ],
})
export class TjenesterComponent implements OnInit {
  tjeneste1;
  tjeneste2;
  tjeneste3;
  tjeneste4;
  activeTjeneste;
  constructor(private elref: ElementRef, private wf: WindowRefService) {}
  imageCdn = environment.img;
  @ViewChild('utvikling') utvikling;
  @ViewChild('seo') seo;
  @ViewChild('design') design;
  @ViewChild('markedsforing') markedsforing;

  public vw: any = 500;
  ngOnInit() {
    this.vw =
      this.wf.nativeWindow.innerWidth < this.wf.nativeWindow.innerHeight
        ? this.wf.nativeWindow.innerHeight
        : this.wf.nativeWindow.innerWidth;
  }

  modulo(n): number {
    return ((n % 3) + 3) % 3;
  }

  private DisableButtons() {
    const buttonLeft = this.elref.nativeElement.querySelector('button.left');
    const buttonRight = this.elref.nativeElement.querySelector('button.right');
    buttonLeft.disabled = true;
    buttonRight.disabled = true;
    setTimeout(function () {
      buttonLeft.disabled = false;
      buttonRight.disabled = false;
    }, 1500);
  }

  right(event): void {
    this.getServices();
    this.DisableButtons();
    const activeNumber: number = parseInt(
      this.activeTjeneste.classList[0].slice(-1)
    );
    const nextActive: number = this.modulo(activeNumber - 1);
    const nextLeft: number = this.modulo(activeNumber + 1);
    const nextLeftElement = this.elref.nativeElement.querySelector(
      '.tjeneste-' + nextLeft
    );
    const nextRightElement = this.activeTjeneste;
    const nextActiveElement = this.elref.nativeElement.querySelector(
      '.tjeneste-' + nextActive
    );

    //Update buttons
    this.updateButtons(nextActiveElement.getAttribute('name'));
    //Previous active - Next RIGHT
    nextRightElement.classList.remove('r-active', 'l-active');
    nextRightElement.classList.add('r-right');
    //previous right - NEXT LEFT
    nextLeftElement.classList.remove('r-right', 'l-right');
    nextLeftElement.classList.add('r-left');
    //previous left - NEXT ACTIVE
    this.activeTjeneste = nextActiveElement;
    this.activeTjeneste.classList.remove('r-left', 'l-left');
    this.activeTjeneste.classList.add('r-active');
  }
  left(event): void {
    this.getServices();
    this.DisableButtons();
    const activeNumber: number = parseInt(
      this.activeTjeneste.classList[0].slice(-1)
    );
    const nextActive: number = this.modulo(activeNumber + 1);
    const nextRgiht: number = this.modulo(activeNumber - 1);
    const nextActiveElement = this.elref.nativeElement.querySelector(
      '.tjeneste-' + nextActive
    );
    const nextLeftElement = this.activeTjeneste;
    const nextRightElement = this.elref.nativeElement.querySelector(
      '.tjeneste-' + nextRgiht
    );
    //Update buttons
    this.updateButtons(nextActiveElement.getAttribute('name'));
    //Previous active - Next RIGHT
    this.removeClasses(nextRightElement);
    nextRightElement.classList.add('l-right');
    //previous right - NEXT LEFT
    this.removeClasses(nextLeftElement);
    nextLeftElement.classList.add('l-left');
    //previous left - NEXT ACTIVE
    this.activeTjeneste = nextActiveElement;
    this.removeClasses(this.activeTjeneste);
    this.activeTjeneste.classList.add('l-active');
  }

  removeClasses(elem): void {
    elem.classList.remove(
      'l-left',
      'r-left',
      'r-right',
      'l-right',
      'l-active',
      'r-active'
    );
  }

  buttonDesign;
  buttonUtvikling;
  buttonSeo;
  buttonActive;
  ngAfterContentInit() {
    this.buttonDesign = this.elref.nativeElement.querySelector(
      '.btn.tjenester.design'
    );
    this.buttonUtvikling = this.elref.nativeElement.querySelector(
      '.btn.tjenester.utvikling'
    );
    this.buttonSeo =
      this.elref.nativeElement.querySelector('.btn.tjenester.seo');
  }

  updateButtons(elementName): void {
    this.buttonActive = this.elref.nativeElement.querySelector(
      '.btn.tjenester.active'
    );
    this.buttonActive.classList.remove('active');
    this.buttonActive = this.elref.nativeElement.querySelector(
      '.btn.tjenester.' + elementName
    );
    this.buttonActive.classList.add('active');
  }

  getServices(): void {
    this.tjeneste1 = this.elref.nativeElement.querySelector('.tjeneste-1');
    this.tjeneste2 = this.elref.nativeElement.querySelector('.tjeneste-2');
    this.tjeneste3 = this.elref.nativeElement.querySelector('.tjeneste-3');
    this.tjeneste4 = this.elref.nativeElement.querySelector('.tjeneste-4');
    this.activeTjeneste = this.elref.nativeElement.querySelector('.r-active');
    if (!this.activeTjeneste) {
      this.activeTjeneste = this.elref.nativeElement.querySelector('.l-active');
    }
  }
}
