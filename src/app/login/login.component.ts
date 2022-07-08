import { Component } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // private _email: string = 'tortuga4281@yahoo.fr';
  // private _password: string = 'coucou';
  private _email: string = '';
  private _password: string = '';
  error: string = '';

  formLogin: FormGroup = new FormGroup({
    email: new FormControl(
      this._email, [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      this._password, [
        Validators.required,
      ]
    )
  });

  getFormControl(key: string): AbstractControl {
    return this.formLogin.controls[key];
  }

  isFormControlInvalid(key: string): boolean {
    const field: AbstractControl = this.getFormControl(key);
    return field.invalid && (field.touched || field.dirty);
  }

  constructor(
    private httpClientService: HttpClientService
  ) { }

  onSubmit(): void {
    if (this.formLogin.valid) {
      const jsonPostUser: {email: string, password: string} = {
        email: this.getFormControl('email').value,
        password: this.getFormControl('password').value
      };

      this.httpClientService.loginCheck(jsonPostUser).subscribe((response) => {
          console.log(response)
      });
    }
    // Parking avec l'utilisateur
  }

}
