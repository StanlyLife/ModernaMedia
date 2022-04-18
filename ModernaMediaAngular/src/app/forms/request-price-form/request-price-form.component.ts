import { SeoService } from 'src/app/services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { ContactService } from './../../services/contact.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl, Meta, Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-request-price-form',
  templateUrl: './request-price-form.component.html',
  styleUrls: [
    './request-price-form.component.scss',
    '../contact-form/contact-form.component.scss',
    '../contact-form/contact-form.desktop.component.scss',
  ],
})
export class RequestPriceFormComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private fb: FormBuilder,
    private cs: ContactService,
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(SeoUtils.FromsPrice.title);
  }
  ngOnInit(): void {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.FromsPrice.description,
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
    title: 'Få et uforpliktet pristilbud',
    subtitle: '100% fornøyd garanti på nettsider, programvare og design!',
  };
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  contactForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    phone: [''],
    business: [''],
    service: ['nettside'],
    body: ['', Validators.required],
  });
  result = false;
  sent = false;
  onSubmit(): void {
    if (this.result || this.sent) {
      return;
    }
    this.sent = true;
    var request = this.cs.SendPriceRequest(this.contactForm.value);
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
      // (!this.contactForm.controls['service'].valid &&
      //   this.contactForm.controls['service'].touched) ||
      (!this.contactForm.controls['body'].valid &&
        this.contactForm.controls['body'].touched));
  ChangingValue(e) {
    console.log(e);
  }
}
