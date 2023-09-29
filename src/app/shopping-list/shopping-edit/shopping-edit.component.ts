import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { shoppingListService } from 'src/app/services/shoppingListService.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  public ingredient: Ingredient = { name: '', amount: 0 };
  public ingredients: Ingredient[];
  public ingredientForm: FormGroup;
  public cleanSuscription: Subscription;
  public isEdit: boolean = false;
  public indexIngredient: number;
  public editedItem:Ingredient
  public textSendForm:string = 'Add'


  constructor(
    private shoppingListService: shoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientForm = this.fb.group({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
    });

    this.cleanSuscription = this.shoppingListService.editIngredient.subscribe(
      (index: number) => {
        this.isEdit = true;
        this.indexIngredient = index;
        this.textSendForm = 'Update'
        this.editedItem = this.shoppingListService.getIngredient(
          index
        );

        this.ingredientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  public onSubmit(type) {
    const value = this.ingredientForm.value;
    const newIngredient = new Ingredient(value.name, value.amount)
    if(type === 'Delete'){
      this.shoppingListService.deleteIngredient(this.indexIngredient)
      this.ingredientForm.reset()
      return
    }
    if (this.isEdit) {
      this.shoppingListService.updateIngredient(this.indexIngredient, newIngredient)
      this.isEdit = false
      this.textSendForm = 'Add'
      this.ingredientForm.reset()
      
      return;
    }
    if(type === 'Add'){
      this.shoppingListService.addIngredient(newIngredient)
      this.textSendForm = 'Add'
      this.ingredientForm.reset()
      return;
    }
    if (type === 'Clear') {
      this.ingredientForm.reset()
      return;
    }
    if(type === 'DeleteAll'){
      this.shoppingListService.deleteIngredients();
      return
    }
    
  }

  ngOnDestroy(): void {
    this.cleanSuscription.unsubscribe();
  }
}
