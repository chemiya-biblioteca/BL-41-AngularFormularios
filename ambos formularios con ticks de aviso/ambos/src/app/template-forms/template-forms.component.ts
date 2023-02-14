import { Component } from "@angular/core";

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}

@Component({
  selector: "app-template-forms",
  templateUrl: "./template-forms.component.html",
  styleUrls: ["./template-forms.component.css"]
})
export class TemplateFormsComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPass: ""
  };
  constructor() {}
  submit() {
    // mostramos los campos
    console.log("Datos de inicio de sesión");
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.password);
    console.log(this.register.repeatPass);

    // comporbamos si son iguales
    if (this.register.password !== this.register.repeatPass) {
      
      console.log(
        "Hay que introducir las dos contraseñas iguales para validarlo"
      );
      
      return;
    }

    
  }
}
