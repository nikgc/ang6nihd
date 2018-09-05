import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable()
export class CustomValidators {
    static alphaNumber(): ValidatorFn {
        const alphaNumericRe: RegExp = /^([a-z0-9]+)$/i;
        return (control: AbstractControl): { [key: string]: any } => {
          const name = control.value;
          if (!name || name.length === 0) {
            return;
          }
          const isAlphaNum = alphaNumericRe.test(name);
          return !isAlphaNum ? { 'special': 'Accepts alpha-numeric values only' } : null;
        };
    }

}