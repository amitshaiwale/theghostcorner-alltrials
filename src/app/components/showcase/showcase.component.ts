import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() imgrSrc = '';

  constructor() { }

  ngOnInit(): void {
  }

}
