import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        mail: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        repeatPass: ["", Validators.required]//creo los campos del formulario
      },
      {
        validator: this.MustMatch("password", "repeatPass") // Validando que sean iguales
      }
    );
  }

  // custom validator to check that two fields match
  MustMatch(controlName: string, matchingControlName: string) {//funcion para comprobar si osn iguales
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      console.log(control.value)
     console.log(matchingControl.value)

      if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      //compruebo si son iguales
     
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });

      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // coger los campos
  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // si no es valido
    if (this.registerForm.invalid) {
      return;
    }

    // si no muestro los campos
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  //limpio los campos
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

