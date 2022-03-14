import { SeoService } from 'src/app/services/seo.service';
import { ContactService } from '../../services/contact.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl, Meta, Title } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { SeoUtils } from 'src/utils/SeoUtils';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-request-audit-form',
  templateUrl: './request-seo-audit-form.component.html',
  styleUrls: [
    './request-seo-audit-form.component.scss',
    './request-seo-audit-form.desktop.component.scss',
  ],
})
export class RequestSeoAuditFormComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private fb: FormBuilder,
    private cs: ContactService,
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(SeoUtils.FormsSeoAudit.title);
  }
  imageCdn = environment.img;
  ngOnInit(): void {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.FormsSeoAudit.description,
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
      src: '../../../../assets/Images/forms/seo/gratis søkemotoroptimalisering undersøkelse.jpg',
    },
    title: 'Kontakt oss',
    subtitle: 'Kontakt oss, uansett hva det skulle være, 100% uforpliktet!',
  };
  scrollToId(id) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  contactForm = this.fb.group({
    analysis: [''],
    name: [''],
    email: ['', Validators.required],
    phone: [''],
    website: ['', Validators.required],
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
    this.contactForm.controls['analysis'].setValue('seo');
    var request = this.cs.SendAuditRequest(this.contactForm.value);
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
      (!this.contactForm.controls['website'].valid &&
        this.contactForm.controls['website'].touched) ||
      (!this.contactForm.controls['body'].valid &&
        this.contactForm.controls['body'].touched));
}
