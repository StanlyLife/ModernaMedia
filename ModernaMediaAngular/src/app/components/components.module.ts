import { environment } from './../../environments/environment.prod';
import { InfoAndImageComponent } from './info-and-image/info-and-image.component';
import { ImageAndTextComponent } from './image-and-text/image-and-text.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UspImageCardsComponent } from './usp-image-cards/usp-image-cards.component';
import { ImagePriceInfoComponent } from './image-price-info/image-price-info.component';
import { BloggThumbnailComponent } from './blogg-thumbnail/blogg-thumbnail.component';
import { BookAMeetingModalComponent } from './book-ameeting-modal/book-ameeting-modal.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent,
    UspImageCardsComponent,
    ImagePriceInfoComponent,
    BloggThumbnailComponent,
    BookAMeetingModalComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent,
    UspImageCardsComponent,
    ImagePriceInfoComponent,
    BloggThumbnailComponent,
    BookAMeetingModalComponent
  ]
})
export class ComponentsModule { 
  public imageCdn = environment.img;
}
