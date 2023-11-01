export default {
    // Add a product to the cart
    ADD_TO_CART(state, { product, quantity }) {
      const productInCart = state.cart.find(item => item.product.id === product.id);
      if (productInCart) {
        productInCart.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }
    },
  
    // Remove a product from the cart
    REMOVE_FROM_CART(state, productId) {
      const index = state.cart.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  
    // Update the quantity of a specific product in the cart
    UPDATE_CART_ITEM(state, { productId, quantity }) {
      const productInCart = state.cart.find(item => item.product.id === productId);
      if (productInCart) {
        productInCart.quantity = quantity;
      }
    },
  
    // Clear all items from the cart
    CLEAR_CART(state) {
      state.cart = [];
    },
  
    // Set the list of products
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  
    // Set the detailed information of a product
    SET_PRODUCT_DETAIL(state, productDetail) {
      state.productDetail = productDetail;
    }
  };
  