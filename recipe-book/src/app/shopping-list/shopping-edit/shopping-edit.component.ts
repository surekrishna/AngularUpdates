import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  @ViewChild("f") formData: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  name: string;
  amount: number;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((id: number) => {
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(id-1);
      this.name = this.editedItem.name;
      this.amount = this.editedItem.amount;
    });
  }

  onAddItem(form: NgForm) {
    const value = form.value;    
    const length = this.shoppingListService.getIngredients().length;
    const newIngredient = new Ingredient(length+1, value.name, value.amount);
    
    if(this.editMode)
      this.shoppingListService.updateIngredient(newIngredient);      
    else
      this.shoppingListService.addIngredient(newIngredient);

    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.formData.reset();
    this.editMode = false;
  }

}
