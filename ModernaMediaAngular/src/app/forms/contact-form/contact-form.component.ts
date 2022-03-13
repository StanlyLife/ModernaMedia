import { ContactService } from './../../services/contact.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss',
    './contact-form.desktop.component.scss',
  ],
})
export class ContactFormComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private fb: FormBuilder,
    private cs: ContactService
  ) {}
  imageCdn = environment.img;
  ngOnInit(): void {}
  @Input() data: any = {
    background: {
      alt: '',
      src: '../../../../assets/Images/forms/contact/trollstigen i molde eller kristansund.jpg',
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
