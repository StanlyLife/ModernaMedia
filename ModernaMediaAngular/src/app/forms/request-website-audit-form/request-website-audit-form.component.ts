import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ContactService } from '../../services/contact.service';
import { SeoService } from 'src/app/services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
@Component({
  selector: 'app-request-website-audit-form',
  templateUrl: './request-website-audit-form.component.html',
  styleUrls: [
    '../request-audit-form/request-seo-audit-form.component.scss',
    '../request-audit-form/request-seo-audit-form.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class RequestWebsiteAuditFormComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private fb: UntypedFormBuilder,
    private cs: ContactService,
    private seo: SeoService
  ) {}
  imageCdn = environment.img;

  ngOnInit(): void {
    this.seo.updateSeo({
      title: SeoUtils.FormsWebsiteAudit.title,
      description: SeoUtils.FormsWebsiteAudit.description,
      keywords: SeoUtils.FormsWebsiteAudit.keywords,
      url: 'https://modernamedia.no/bestill/nettside-analyse',
    });
  }
  @Input() data: any = {
    background: {
      alt: '',
      src: '../../../../assets/Images/forms/hjemmeside/anylse av hjemmeside.jpg',
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
    this.contactForm.controls['analysis'].setValue('hjemmeside');
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
