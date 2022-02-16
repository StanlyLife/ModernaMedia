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
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { TjenesterListeComponent } from './tjenester-liste/tjenester-liste.component';
import { AuthorComponent } from './author/author.component';
import { AboutYourNextProjectComponent } from './about-your-next-project/about-your-next-project.component';

@NgModule({
  declarations: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent,
    UspImageCardsComponent,
    ImagePriceInfoComponent,
    BloggThumbnailComponent,
    BookAMeetingModalComponent,
    ToastComponent,
    TjenesterListeComponent,
    AuthorComponent,
    AboutYourNextProjectComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    BannerComponent,
    ImageAndTextComponent,
    InfoAndImageComponent,
    UspImageCardsComponent,
    ImagePriceInfoComponent,
    BloggThumbnailComponent,
    BookAMeetingModalComponent,
    ToastComponent,
    AuthorComponent,
    AboutYourNextProjectComponent,
  ],
})
export class ComponentsModule {
  public imageCdn = environment.img;
}
