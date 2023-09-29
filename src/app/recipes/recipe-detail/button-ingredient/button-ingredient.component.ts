import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-button-ingredient',
  templateUrl: './button-ingredient.component.html',
  styleUrls: ['./button-ingredient.component.scss'],
})
export class ButtonIngredientComponent {
  public ingredients: Ingredient[] = [];
  @Input() public ingredient: Ingredient;
  @Output() public ingredientsArray = new EventEmitter<Ingredient[]>();
  public textButton: string = 'Add';

  public selectedIgredient(ingredient: Ingredient) {
    if (ingredient.name !== '') {
      this.textButton = 'Added';
      alert('Ingredient Added' + ' ' + ingredient.name);
      this.ingredients.push(ingredient);
      this.ingredientsArray.emit(this.ingredients);
    }
  }
}
