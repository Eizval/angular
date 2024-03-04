import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { NgbAlertModule, NgbDropdownModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbDropdownModule,
    NgbRatingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    DropdownComponent,
    ExampleOneComponent,
    LoginComponent
  ],
  exports: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    DropdownComponent,
    ExampleOneComponent,
    LoginComponent
  ]
})
export class SharedModule {
}
