import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() listItem;

  constructor() { }

  ngOnInit(): void {
  }

}
