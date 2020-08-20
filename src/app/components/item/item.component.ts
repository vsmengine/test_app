import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() listItem: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
