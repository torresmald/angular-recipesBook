import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../services/shoppingListService.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];
  @Input() path: string;
  constructor(private shoppingListService: shoppingListService) {
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}
