// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// import { of } from "rxjs";

// export function matchValidator(
//   matchTo: string,
//   reverse?: boolean
// ): ValidatorFn {
//   return (control: AbstractControl):
//   ValidationErrors | null => {
//     if (control.parent && reverse) {
//       const c = (control.parent?.controls as any)[matchTo]
//          of AbstractControl;
//       if (c) {
//         c.updateValueAndValidity();
//       }
//       return null;
//     }
//     return !!control.parent &&
//       !!control.parent.value &&
//       control.value ===
//       (control.parent?.controls as any)[matchTo].value
//       ? null
//       : { matching: true };
//   };
// }
