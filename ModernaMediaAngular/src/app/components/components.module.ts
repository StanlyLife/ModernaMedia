import { environment } from './../../environments/environment.prod';
import { InfoAndImageComponent } from './info-and-image/info-and-image.component';
import { ImageAndTextComponent } from './image-and-text/image-and-text.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UspImageCardsComponent } from './usp-image-cards/usp-image-cards.component';
import { ImagePriceInfoComponent } from './image-price-info/image-price-info.component';
import { BloggThumbnailComponent } from './blogg-thumbnail/blogg-thumbnail.component';



@NgModule({
  declarations: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent,
    UspImageCardsComponent,
    ImagePriceInfoComponent,
    BloggThumbnailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent,
    UspImageCardsComponent,
    ImagePriceInfoComponent,
    BloggThumbnailComponent,
  ]
})
export class ComponentsModule { 
  public imageCdn = environment.img;
}
