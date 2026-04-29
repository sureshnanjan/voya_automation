export interface PSHomePageOperations {
   // Information on Home Page
    getLogoDetails: () => PSLogo;
   getTopCategoryItems: () => string[];
   getLeftSideBarItems: () => string[];
   getCenterImageItems: () => string[];
   // Actions on Home Page
   visitCategory(catgegoryname: string): CatItems[];

}
// POJO - Plain Old JavaScript Object
type PSLogo = {
    imagesrc: string;
    imagehelpstring: string;
    position: string;
    color: string;
    font: string;
}

type CatItems = {
    prod_id:string
    prod_name:string
}

// ==================== TYPES / POJOs ====================

export type CartItem = {
    item_id: string;
    product_id: string;
    description: string;
    quantity: number;
    list_price: number;
    total_cost: number;
};

// ==================== INTERFACE ====================

/** Add to Cart operations */
export interface PSAddToCartOperations {
    addItemToCart(itemId: string): void;
    getCartItems(): CartItem[];
    updateItemQuantity(itemId: string, quantity: number): void;
    removeItem(itemId: string): void;
    getCartTotal(): number;
    proceedToCheckout(): void;
}