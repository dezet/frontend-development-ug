import {AbstractControl} from "@angular/forms";

export const CustomValidators = {
  numberValidator: (control: AbstractControl) => {
    if (isNaN(control.value)) {
      return {
        number: true
      }
    }
  },

  addressValidator: (control: AbstractControl) => {
    if (!control.value.match(/^[0-9a-zA-Z]{3}-[0-9a-zA-Z]{3}-[0-9a-zA-Z]{3}-[0-9a-zA-Z]{3}$/)) {
      return {
        address: true
      }
    }
  }
};
