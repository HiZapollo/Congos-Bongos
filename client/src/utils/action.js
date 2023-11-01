// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';

// Action Creators

// Add a product to the cart
export const addToCart = (product, quantity = 1) => ({
    type: ADD_TO_CART,
    payload: { product, quantity }
});

// Remove a product from the cart
export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

// Update the quantity of a specific product in the cart
export const updateCartItem = (productId, quantity) => ({
    type: UPDATE_CART_ITEM,
    payload: { productId, quantity }
});

// Clear all items from the cart
export const clearCart = () => ({
    type: CLEAR_CART
});

// Set the list of products (e.g., after fetching from an API)
export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

// Set the detailed information of a product (e.g., after fetching its detail from an API)
export const setProductDetail = (productDetail) => ({
    type: SET_PRODUCT_DETAIL,
    payload: productDetail
});

