import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tjenester',
  templateUrl: './tjenester.component.html',
  styleUrls: ['./tjenester.component.scss','./tjenester.desktop.component.scss']
})
export class TjenesterComponent implements OnInit {
  tjeneste1;
  tjeneste2;
  tjeneste3;
  tjeneste4;
  activeTjeneste;
  constructor(private elref:ElementRef) { }

  @ViewChild('utvikling') utvikling; 
  @ViewChild('seo') seo; 
  @ViewChild('design') design; 
  @ViewChild('markedsforing') markedsforing; 

  ngOnInit(): void {
  }

  modulo(n) : number {
    return ((n%3)+3)%3;
  }

  right(event) : void {
    this.getServices();
    const activeNumber : number = parseInt(this.activeTjeneste.classList[0].slice(-1));
    const nextActive : number = this.modulo(activeNumber - 1);
    const nextLeft : number = this.modulo(activeNumber + 1);
    const nextLeftElement = this.elref.nativeElement.querySelector('.tjeneste-' + nextLeft);
    const nextRightElement = this.activeTjeneste;
    const nextActiveElement = this.elref.nativeElement.querySelector('.tjeneste-' + nextActive);
    console.log(activeNumber);
    console.log(nextActive);
    console.log(nextActiveElement);
    //Previous active - Next RIGHT
    nextRightElement.classList.remove("active", "moveLeft");
    nextRightElement.classList.add("moveRight", "right");
    //previous right - NEXT LEFT
    nextLeftElement.classList.remove("moveRight", "right");
    nextLeftElement.classList.add("moveLeft", "left");
    //previous left - NEXT ACTIVE
    this.activeTjeneste = nextActiveElement;
    this.activeTjeneste.classList.remove("moveLeft", "left");
    this.activeTjeneste.classList.add("active");
  }

  ngAfterContentInit() {
  }
  
  getServices() : void {
    this.tjeneste1 = this.elref.nativeElement.querySelector('.tjeneste-1');
    this.tjeneste2 = this.elref.nativeElement.querySelector('.tjeneste-2');
    this.tjeneste3 = this.elref.nativeElement.querySelector('.tjeneste-3');
    this.tjeneste4 = this.elref.nativeElement.querySelector('.tjeneste-4');
    this.activeTjeneste = this.elref.nativeElement.querySelector('.active');
  }
}

