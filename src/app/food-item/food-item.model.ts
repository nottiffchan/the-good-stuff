export class FoodItem {
  id!: string
  name: string;
  summary: string;
  description: string;
  price: string;
  calories: string;
  imagePath: string;
  category: string;

  constructor(name: string, summary: string, description: string, price: string, calories: string, imagePath: string, category: string) {
    this.name = name;
    this.summary = summary;
    this.description = description;
    this.price = price;
    this.calories = calories;
    this.imagePath = imagePath;
    this.category = category;
  }
}
