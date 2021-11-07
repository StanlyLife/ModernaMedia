import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-book-ameeting-modal',
  templateUrl: './book-ameeting-modal.component.html',
  styleUrls: ['./book-ameeting-modal.component.scss'],
})
export class BookAMeetingModalComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', Validators.maxLength(50)],
      content: ['', Validators.maxLength(250)],
    });
  }
  //Properties
  contactForm: FormGroup;
  IsVisible: boolean = true;
  submitted: boolean = false;
  //NgOnInit
  ngOnInit(): void {}
  //MEthods
  public SubmitMeetingRequest() {
    this.submitted = true;
  }
  public ExitModal() {
    this.ToggleVisible();
  }
  public ToggleVisible() {
    this.IsVisible = !this.IsVisible;
  }
  //Getters
  get contactFormControl() {
    return this.contactForm.controls;
  }
  get email() {
    return this.contactFormControl.email;
  }
  get phone() {
    return this.contactFormControl.phone;
  }
  get content() {
    return this.contactFormControl.content;
  }
}
