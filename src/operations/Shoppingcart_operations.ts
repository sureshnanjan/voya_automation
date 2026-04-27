export interface ShoppingcartOperations {
    getCartItems(): string[];
    getTotalPrice(): number;
    proceedToCheckout(): void;
    removeItem(itemName: string): void;
    updateItemQuantity(itemName: string, quantity: number): void;
}