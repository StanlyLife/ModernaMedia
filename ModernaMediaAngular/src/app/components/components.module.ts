import { InfoAndImageComponent } from './info-and-image/info-and-image.component';
import { ImageAndTextComponent } from './image-and-text/image-and-text.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    
  ]
})
export class ComponentsModule { }
