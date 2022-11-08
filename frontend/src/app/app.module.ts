import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";
import { LoginComponent } from './login/login.component';
import {FilterPipe, ProductComponent} from './product/product.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AuthguardService} from "../services/authguard.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MyResolver} from "../services/http.service";

const routes: Routes = [
  {
    path: 'products', component: ProductComponent, canActivate: [AuthguardService], resolve: [MyResolver]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', redirectTo: 'products'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    FilterPipe,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [MatSnackBar, Overlay],
  bootstrap: [AppComponent]
})
export class AppModule { }
