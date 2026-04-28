export interface PSCartPageOperations {
    // Information on Cart Page
    getCartDetails: () => PSCart;
    getCartItems: () => CartItem[];
    getCartTotal: () => number;
    getCartItemCount: () => number;

    // Actions on Cart Page
    addToCart(prod_id: string): CartItem;
    removeFromCart(prod_id: string): CartItem[];
    updateCartItem(prod_id: string, quantity: number): CartItem;
    clearCart(): void;
    checkout(): OrderSummary;
}

// POJO - Plain Old JavaScript Object
type PSCart = {
    cart_id: string;
    cart_status: string;
    created_date: string;
    last_updated: string;
}

type CartItem = {
    prod_id: string;
    prod_name: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    image_src: string;
}

type OrderSummary = {
    order_id: string;
    order_status: string;
    order_total: number;
    order_date: string;
    items: CartItem[];
}