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
  apiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getFoodsUpdateListener() {
    return this.foodItemsUpdated.asObservable();
  }

  getFoodItems() {
    return this.http.get<{result: string, data: FoodItem[]}>(`${this.apiUrl}/getFoodItems`).subscribe((foodItemData) => {
      this.foodItems = foodItemData.data;
      this.foodItemsUpdated.next([...this.foodItems]);
    });
  }

  addFoodItem(foodItem: FoodItem) {
    this.http.post<{result: string}>(`${this.apiUrl}/addFoodItem`, foodItem).subscribe(res => {
      console.log(res.result)
      this.foodItems.push(foodItem);
      this.foodItemsUpdated.next([...this.foodItems]);
    });
  }
}
