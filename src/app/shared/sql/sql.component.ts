import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TestComponent } from '../../test/test.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { HighlightAutoResult, HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [RouterOutlet, TestComponent, SharedModule, CommonModule, RouterLink, RouterLinkActive, HighlightModule],
  templateUrl: './sql.component.html',
  styleUrl: './sql.component.scss'
})
export class SqlComponent {

  response!: HighlightAutoResult;

  code = `(ISNULL(Male, 0) <> 0)`;

  code1 = `(ISNULL(Vorname, N "" ( <> "")`;

  code2 = `Trim(Name) + '' + Trime(Vorname) AS fullname`;

  code3 = `Trim(ISNULL((Name, '')) + '' + Trime(ISNULL(Vorname, '')) AS fullname`;

  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }

}
