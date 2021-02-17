import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FoodItem } from '../food-item/food-item.model';
import { FoodItemsService } from '../services/food-items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  foodItemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private foodSrv: FoodItemsService,
  ) {
    this.foodItemForm = this.fb.group({
      name: ['', Validators.required],
      summary: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      calories: [''],
      imagePath: ['', Validators.required],
      category: ['', Validators.required],
    })
  }

  get f() {
    return this.foodItemForm.controls;
  }

  onSubmit() {
    if (this.foodItemForm.invalid) {
      return;
    }
    let _foodItem = new FoodItem(this.foodItemForm.value.name, this.foodItemForm.value.summary,this.foodItemForm.value.description, this.foodItemForm.value.price, this.foodItemForm.value.calories, this.foodItemForm.value.imagePath, this.foodItemForm.value.category);
    console.log("in admin", _foodItem)
    this.foodSrv.addFoodItem(_foodItem);
    this.foodItemForm.reset();
  }

  ngOnInit(): void {
  }

}
