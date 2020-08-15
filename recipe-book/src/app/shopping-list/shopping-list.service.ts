import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient(1, 'Apples', 5),
        new Ingredient(2, 'Tomatoes', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(id: number) {
        return this.ingredients[id];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients)
        //     this.addIngredient(ingredient);
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(newIngredient: Ingredient) {        
        this.ingredients[this.ingredients.length + 1] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    } 

}