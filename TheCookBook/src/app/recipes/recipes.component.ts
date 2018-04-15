import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Array<RecipeModel> = [] ;
  current:RecipeModel;
  name:string;
  recipeUrl = "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/07/palakpaneer1.jpg";
  
 // test = new RecipeModel('Palak Paneer',this.recipeUrl, 'Recipe Details',['palak','paneer']);
  
  constructor() { 
    //this.recipes.push(this.test);
  }

  ngOnInit() {
    
  }
  
  
  
  addrecipe () {
    let recipeUrl = "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/07/palakpaneer1.jpg";
    let test = new RecipeModel(this.recipes.length+1,'Palak Paneer',recipeUrl, 'Recipe Details',['palak','paneer']);
    this.recipes.push(test);
  }

  showDetails(id){
    if(this.recipes.length >= id)
    {
      this.current = this.recipes[id-1];
      console.log(this.current);
    }
    this.current.setName('Mutter Paneer');
  }

}
