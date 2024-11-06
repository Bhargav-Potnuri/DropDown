import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: SignUpService,
    private route: Router,
    private authService:AuthServiceService
  ) {}
  ngOnInit(): void {
    this.signupForm = this.createSignUpForm();
  }

  createSignUpForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Values:', this.signupForm.value);
      this.dataService.createUser(this.signupForm.value).subscribe((res) => {
        console.log('res', res);
        this.dataService.setFormSubmitted(true);
        this.authService.setSignedInStatus(true);

        this.route.navigate(['/account']);
      });
    }
  }
  isInvalid(controlName: string): boolean {
    const control = this.signupForm.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }
}
