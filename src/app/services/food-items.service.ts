import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from '../food-item/food-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {
  private foodItems: FoodItem[] = [];
  private foodItemsUpdated = new Subject<FoodItem[]>();

  constructor(private http: HttpClient) { }

  getFoodsUpdateListener() {
    return this.foodItemsUpdated.asObservable();
  }

  getFoodItems() {
    return this.http.get<{data: FoodItem[]}>('http://localhost:3000/api/foodItems').subscribe((foodItemData) => {
      this.foodItems = foodItemData.data;
      this.foodItemsUpdated.next([...this.foodItems]);
    });
  }
}
