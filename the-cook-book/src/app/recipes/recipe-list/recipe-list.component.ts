import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]  = [
    new Recipe('Meduwada','This is Meduwada recipe','https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/dahi-vada-recipe-90.jpg'),
    new Recipe('Dahiwada','This is Dahiwada recipe','https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/dahi-vada-recipe-90.jpg')


  ];
  constructor() { }

  ngOnInit() {
  }

}
