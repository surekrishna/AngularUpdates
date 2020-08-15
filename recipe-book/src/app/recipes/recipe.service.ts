import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {    

    private recipes: Recipe[] = [
        new Recipe(1, 'Tasty Fish', 'Super tasty awesome!', 
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Boiled Vegitables', 4)
        ]
        ),
        new Recipe(2, 'Big Fat Burger', 'what else you want!', 
        'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/01/Monkey-Bar-2-395x500.jpg',
        [
            new Ingredient('Bunds', 2),
            new Ingredient('Meat', 1),
            new Ingredient('Vegitables', 3)
        ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {        
        return this.recipes[id - 1];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {   
        this.shoppingListService.addIngredients(ingredients);
    }
}