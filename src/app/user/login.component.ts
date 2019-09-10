import { Component, forwardRef, Inject } from "@angular/core";
import { AuthService } from './auth.service';
import { injectTemplateRef } from '@angular/core/src/render3/view_engine_compatibility';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'

})
export class LoginComponent {
  userName: string;
  password: string;
  constructor(private authService: AuthService,
              private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
