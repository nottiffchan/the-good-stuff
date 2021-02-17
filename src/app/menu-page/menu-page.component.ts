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

  foodItems: FoodItem[] = [];
  private foodSub!: Subscription;

  categories = [
    { name: 'noodles', selected: true },
    { name: 'rice', selected: false },
    { name: 'low-carb', selected: false },
    { name: 'vegan', selected: false },
    { name: 'sides', selected: false },
    { name: 'dessert', selected: false },
  ];
  currCat: any = this.categories[0];

  constructor(public foodSrv: FoodItemsService) { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  selectCat(index: number) {
    for (let i = 0; i < 6; i++) {
      this.categories[i].selected = false;
    }
    this.categories[index].selected = true;
    this.scrollToCat(this.categories[index].name);
  }

  scrollToCat(id: string) {
    const maybeNull = document.getElementById(id);
    if (maybeNull != null) {
      maybeNull.scrollIntoView({behavior: 'smooth'});
    }
  }

  getFoodItems() {
    this.foodSrv.getFoodItems();
    this.foodSub = this.foodSrv.getFoodsUpdateListener().subscribe((foodItems: FoodItem[]) => {
      this.foodItems = foodItems;
    });
  }

}
