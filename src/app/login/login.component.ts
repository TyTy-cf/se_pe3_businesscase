import { Component } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {UrlApi} from "../../services/url-api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _email: string = 'tortuga4281@yahoo.fr';
  private _password: string = 'coucou';
  // private _email: string = 'enzogrignaffini@yahoo.fr';
  // private _password: string = 'test';
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

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  getFormControl(key: string): AbstractControl {
    return this.formLogin.controls[key];
  }

  isFormControlInvalid(key: string): boolean {
    const field: AbstractControl = this.getFormControl(key);
    return field.invalid && (field.touched || field.dirty);
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      const jsonPostUser: {email: string, password: string} = {
        email: this.getFormControl('email').value,
        password: this.getFormControl('password').value
      };

      this.httpClientService.loginCheck(jsonPostUser).subscribe(
        (response) => {
          if (response.token) {
            localStorage.setItem(UrlApi.keyTokenJWT, response.token);
            this.router.navigate(['/dashboard']).then();
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.error = 'Identifiants invalides';
            }
          }
        }
      );
    }
    // Parking avec l'utilisateur
  }

}
