/**
 * This file defines the 'category' type and creates three instances of it: category1, category2, and category3. Each instance represents a different category of pets (Dogs, Cats, and Birds) with a unique id and name.   
 */


type category={
    id:number;
    name:string;
}
/**
 * Example category objects
 * category1 represents a category with the name "Dogs" and an id of 1.
 * category2 represents a category with the name "Cats" and an id of 2.
 * category3 represents a category with the name "Birds" and an id of 3.
 * These category objects can be used to classify pets or other entities in the application, allowing for easier organization and retrieval of information based on categories. The module exports the category type and the example category objects for use in other parts of the application, enabling developers to easily import and utilize these categories wherever needed.     
 */
let category1:category={
    id:1,
    name:"Dogs"     
}
/**
 * Example category objects
 * category2 represents a category with the name "Cats" and an id of 2.
 * category3 represents a category with the name "Birds" and an id of 3.
 * These category objects can be used to classify pets or other entities in the application, allowing for easier organization and retrieval of information based on categories. The module exports the category type and the example category objects for use in other parts of the application, enabling developers to easily import and utilize these categories wherever needed.     
 */

let category2:category={
    id:2,
    name:"Cats"
}
/**
 * Example category object
 * category3 represents a category with the name "Birds" and an id of 3.
 * This category object can be used to classify pets or other entities in the application, allowing for easier organization and retrieval of information based on categories. The module exports the category type and the example category objects for use in other parts of the application, enabling developers to easily import and utilize this category wherever needed.  
 */
let category3:category={
    id:3,
    name:"Birds"
}