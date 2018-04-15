export class RecipeModel {
    id:number;
    name: string;
    imageUrl: string;
    procedure: string;
    ingredients: Array<string>;

    constructor (id,name, imageUrl, procedure, ingredients){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.procedure = procedure;
        this.ingredients = ingredients;
    }

    setName(name) {
        this.name = name;
    }  

}