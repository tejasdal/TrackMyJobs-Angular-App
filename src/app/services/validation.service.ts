// Email and password match validation are modified from J. Watmore, "Angular 9 - Reactive Forms Validation Example," 19 April 2020. [Online]. Available: https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example. [Accessed 10 June 2020].

import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
      const validValue = regex.test(control.value);
      return validValue ? null : { invalidEmail: true };
    };
  }

  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        // password mismatch
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        // password match
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
