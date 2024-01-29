import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  @Input() public customName = '';
  public title = 'Example A';


  constructor() { }

  ngOnInit() {
  }

}
