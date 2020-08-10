import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amoutInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amoutInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);  
    this.shoppingListService.addIngredient(newIngredient);  
  }

}
