import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TestComponent } from '../../test/test.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { HighlightAutoResult, HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-clone-zilla',
  standalone: true,
  imports: [RouterOutlet, TestComponent, SharedModule, CommonModule, RouterLink, RouterLinkActive, HighlightModule],
  templateUrl: './clone-zilla.component.html',
  styleUrls: ['./clone-zilla.component.css']
})
export class CloneZillaComponent implements OnInit {
  
  response!: HighlightAutoResult;

  code = `/usr/sbin/ocs-sr -q2 -j2 -z1p -i 0 -fsck -senc -p reboot savedisk win11_image_noupdates sda`;

  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
