import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model"

@Component ({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html'
})

export class ShoppingListComponent {
    ingredients: Ingredient[]=[new Ingredient("Dahi",1000),
    new Ingredient("Udid Dal",250)
    ];


}