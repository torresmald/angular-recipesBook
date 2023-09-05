import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() item: EventEmitter<Recipe> = new EventEmitter();

  public onSelectItem(value:Recipe) {        
    this.item.emit(value);
  }
}
