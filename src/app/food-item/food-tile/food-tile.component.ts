import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-food-tile',
  templateUrl: './food-tile.component.html',
  styleUrls: ['./food-tile.component.css']
})
export class FoodTileComponent implements OnInit {
  plus = faPlus;
  foodItem = new FoodItem("truffled-up capellini al funghi", "mushrooms, cordyceps, sous vide egg" ,"topped with wild mushrooms, nourishing cordyceps flower and sous vide egg", "9.50", "400", "assets/food/washokubowl.png");

  constructor() { }

  ngOnInit(): void {
  }

}
