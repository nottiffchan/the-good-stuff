import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodItem } from '../food-item/food-item.model';
import { FoodItemsService } from '../services/food-items.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  mediterraneanBowl = new FoodItem("mediterranean bowl", "roast chicken, cherry tomatoes, sweet corn", "", "8.00", "300", "assets/food/mediterraneanbowl.png");
    foodItem = new FoodItem("truffled-up capellini al funghi", "mushrooms, cordyceps, sous vide egg" ,"topped with wild mushrooms, nourishing cordyceps flower and sous vide egg", "9.50", "400", "assets/food/washokubowl.png");

  foodItems: FoodItem[] = [];
  private foodSub!: Subscription;

  constructor(public foodSrv: FoodItemsService) { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  getFoodItems() {
    this.foodSrv.getFoodItems();
    this.foodSub = this.foodSrv.getFoodsUpdateListener().subscribe((foodItems: FoodItem[]) => {
      this.foodItems = foodItems;
    });
  }

}
