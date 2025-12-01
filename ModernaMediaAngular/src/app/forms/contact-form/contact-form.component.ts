import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeUrl, Title } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ContactService } from './../../services/contact.service';
import { SeoService } from 'src/app/services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss',
    './contact-form.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactFormComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private fb: UntypedFormBuilder,
    private cs: ContactService,
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(SeoUtils.FormsKontakt.title);
  }
  imageCdn = environment.img;
  ngOnInit(): void {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.FormsKontakt.description,
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }
  @Input() data: any = {
    background: {
      alt: '',
      src: '../../../../assets/Images/forms/contact/trollstigen i molde eller kristansund.jpg',
    },
    title: 'Kontakt oss',
    subtitle: 'Kontakt oss, uansett hva det skulle være, 100% uforpliktet!',
  };
  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  contactForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    phone: [''],
    business: [''],
    title: ['', Validators.required],
    body: ['', Validators.required],
  });
  result = false;
  sent = false;
  onSubmit(): void {
    if (this.result || this.sent) {
      return;
    }
    this.sent = true;
    var request = this.cs.SendContactRequest(this.contactForm.value);
    this.cs.SendContactRequestResult.subscribe((arg) => {
      this.result = arg;
      if (this.result) {
        this.contactForm.reset();
      }
    });
  }
  formError =
    !this.contactForm.valid &&
    this.contactForm.touched &&
    ((!this.contactForm.controls['email'].valid &&
      this.contactForm.controls['email'].touched) ||
      (!this.contactForm.controls['title'].valid &&
        this.contactForm.controls['title'].touched) ||
      (!this.contactForm.controls['body'].valid &&
        this.contactForm.controls['body'].touched));
}
