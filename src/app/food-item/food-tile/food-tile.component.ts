import { Component, Input, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-food-tile',
  templateUrl: './food-tile.component.html',
  styleUrls: ['./food-tile.component.css']
})
export class FoodTileComponent implements OnInit {
  @Input() foodItem!: FoodItem;

  plus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
