import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Registrationform = new FormGroup({
    userName: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phoneNumber: new FormControl(''),
    dob: new FormControl('')
  });
  submitted = false;
  emailExist = false;
  
  constructor(private authService: AuthServiceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.Registrationform = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {

        validator: ConfirmPasswordValidator("password", "confirmPassword")

      },

    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Registrationform.controls;
  }


  onReset(): void {
    this.submitted = false;
    this.emailExist = false;
    this.Registrationform.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.emailExist = false;
    
    if (this.Registrationform.invalid) {
      return;
    }

    console.log(this.Registrationform.controls['userName'].value);
    let data: any = {
      'userName': this.Registrationform.controls['userName'].value,
      'name': this.Registrationform.controls['name'].value,
      'emailAddress': this.Registrationform.controls['email'].value,
      'phoneNumber': this.Registrationform.controls['phoneNumber'].value,
      'dob': this.Registrationform.controls['dob'].value,
      'password': this.Registrationform.controls['password'].value
    }

    this.authService.registerUser(data).subscribe(data => {
      console.log(data);
      this.Registrationform.reset();
      this.router.navigate(['./login']);

    }, error => {

      this.emailExist = true;

    }
    )



  }

}
