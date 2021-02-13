import { Component, OnInit } from '@angular/core';
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons';
import { FoodItem } from '../food-item/food-item';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  washokuBowl = new FoodItem("washoku bowl", "fresh salmon, edamame, sous vide egg", "blah", "8.50", "350", "assets/food/washokubowl.png");
  mediterraneanBowl = new FoodItem("mediterranean bowl", "roast chicken, cherry tomatoes, sweet corn", "", "8.00", "300", "assets/food/mediterraneanbowl.png");

  constructor() { }

  ngOnInit(): void {
  }

}
