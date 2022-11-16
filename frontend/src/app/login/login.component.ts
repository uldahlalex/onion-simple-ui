import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgStyle
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: any;
  dlkfdj: any;

  formGroup: FormGroup;
  constructor(public http: HttpService,
              private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      whatever: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      checkBox: new FormControl(false, [
        Validators.requiredTrue
      ])
    })
  }
}
