/**
 *  This file defines the TypeScript type for an order in a pet store application, along with two example order objects. The `order` type includes properties such as `id`, `petId`, `quantity`, `shipDate`, `status`, and `complete`. The example orders demonstrate how to create instances of the `order` type with specific values. The module exports the `order` type and the example order objects for use in other parts of the application, allowing developers to easily import and utilize these types and objects wherever needed.  
 */
type order ={
    id:number;  
    petId:number;
    quantity:number;
    shipDate:string;    
    status:string;
    complete:boolean;   
}
/**
 * Example order objects
 * order1 represents an order with an id of 1, associated with petId 1, a quantity of 1, a ship date of June 1, 2024, a status of "placed", and is not complete.
 * order2 represents an order with an id of 2, associated with petId 2, a quantity of 2, a ship date of June 2, 2024, a status of "approved", and is complete.
 * These order objects can be used to represent orders in the pet store application, allowing for easy management and tracking of orders based on their properties. The module exports the order type and the example order objects for use in other parts of the application, enabling developers to easily import and utilize these orders wherever needed.   
 */
let order1:order={
    id:1,
    petId:1,
    quantity:1,
    shipDate:"2024-06-01T00:00:00Z",
    status:"placed",
    complete:false
}
/**
 * Example order object         
 * order2 represents an order with an id of 2, associated with petId 2, a quantity of 2, a ship date of June 2, 2024, a status of "approved", and is complete.
 * This order object can be used to represent an order in the pet store application, allowing for easy management and tracking of orders based on its properties. The module exports the order type and the example order objects for use in other parts of the application, enabling developers to easily import and utilize this order wherever needed.   
 */
let order2:order={
    id:2,
    petId:2,    
    quantity:2,
    shipDate:"2024-06-02T00:00:00Z",
    status:"approved",
    complete:true
}
export {order,order1,order2}