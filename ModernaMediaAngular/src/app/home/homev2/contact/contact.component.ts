import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { ContactService } from './../../../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  constructor(
    private scroller: ViewportScroller,
    private fb: UntypedFormBuilder,
    private cs: ContactService
  ) {}
  @Input() data: any = {
    background: {
      alt: '',
      src: '../../../../assets/Images/forms/contact/trollstigen i molde eller kristansund.jpg',
    },
    title: 'Kontakt oss',
    subtitle: 'Kontakt oss, uansett hva det skulle være, 100% uforpliktende!',
  };
  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
  contactForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    phone: [''],
    business: [''],
    body: ['', Validators.required],
  });
  result = false;
  sent = false;
  loading = false;

  onSubmit(): void {
    if (this.result || this.sent || this.loading) {
      return;
    }
    this.loading = true;
    this.cs.SendContactRequest(this.contactForm.value);
    this.cs.SendContactRequestResult.subscribe((arg) => {
      this.result = arg;
      this.loading = false;
      if (this.result) {
        this.contactForm.reset();
      }
      this.sent = true;
    });
  }

  formError =
    !this.contactForm.valid &&
    this.contactForm.touched &&
    ((!this.contactForm.controls['email'].valid &&
      this.contactForm.controls['email'].touched) ||
      (!this.contactForm.controls['body'].valid &&
        this.contactForm.controls['body'].touched));
}
