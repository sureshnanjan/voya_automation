import {PSHomePageOperations} from "../operations/petstore-home-operations";
export interface PSAddToCartOperations {
    clickAddToCartButton(productId: string): void;
    getCartUrl(): string;
    getProductNameInCart(): string;
}       
    