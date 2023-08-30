import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  public ingredients:Ingredient[] = [
    new Ingredient('apples', 4),
    new Ingredient('tomatoes', 10)
  ]
}
