import { ContactService } from './../../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.desktop.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private cs: ContactService
  ) {}
  ngOnInit(): void {}
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
  imageCdn = environment.img;
  onSubmit(): void {
    if (this.result) {
      return;
    }
    console.log(this.contactForm.value);
    var request = this.cs.SendContactRequest(this.contactForm.value);
    this.cs.SendContactRequestResult.subscribe((arg) => {
      this.result = arg;
      if (this.result) {
        this.contactForm.reset();
      }
    });
  }
}
