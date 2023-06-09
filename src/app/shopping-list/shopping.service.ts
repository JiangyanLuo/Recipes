import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShoppingService{
    ingredientsChanged = new Subject<Ingredient[]>();

    private  ingredients:Ingredient[] = [
            new Ingredient('Apples',5),
            new Ingredient('Tomatoes',10),
        ];

    getIngredients(){
        return this.ingredients;
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);

    }
}