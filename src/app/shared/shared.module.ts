import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { NgbAlertModule, NgbDropdownModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ExampleOneComponent } from './example-one/example-one.component';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbDropdownModule,
    NgbRatingModule
  ],
  declarations: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    DropdownComponent,
    ExampleOneComponent
  ],
  exports: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    DropdownComponent,
    ExampleOneComponent
  ]
})
export class SharedModule {
}
