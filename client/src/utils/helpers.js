export function pluralize(name, count) {
    if (count === 1) {
      return name;
    }
    return name + 's';
  }
  
  export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open('shop-shop', 1);
      let db, tx, store;
      request.onupgradeneeded = function(e) {
        const db = request.result;
        db.createObjectStore('products', { keyPath: '_id' });
        db.createObjectStore('types', { keyPath: '_id' });
        db.createObjectStore('cart', { keyPath: '_id' });
      };
  
      request.onerror = function(e) {
        console.log('There was an error');
      };
  
      request.onsuccess = function(e) {
        db = request.result;
        tx = db.transaction(storeName, 'readwrite');
        store = tx.objectStore(storeName);
  
        db.onerror = function(e) {
          console.log('error', e);
        };
  
        switch (method) {
          case 'put':
            store.put(object);
            resolve(object);
            break;
          case 'get':
            const all = store.getAll();
            all.onsuccess = function() {
              resolve(all.result);
            };
            break;
          case 'delete':
            store.delete(object._id);
            break;
          default:
            console.log('No valid method');
            break;
        }
  
        tx.oncomplete = function() {
          db.close();
        };
      };
    });
  }

// Formats price to a standard currency display (e.g., $100.00)
export const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) {
        console.error("Invalid price value:", price);
        return null;
    }
    return `$${parseFloat(price).toFixed(2)}`;
};

// Truncate long product descriptions for display in product listings
export const truncateDescription = (description, maxLength = 100) => {
    if (typeof description !== 'string') {
        console.error("Invalid description value:", description);
        return "";
    }
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
};

// Calculate total price for items in cart
export const calculateTotal = (cartItems) => {
    if (!Array.isArray(cartItems)) {
        console.error("Invalid cartItems value:", cartItems);
        return 0;
    }
    return cartItems.reduce((total, item) => {
        if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
            console.error("Invalid item in cart:", item);
            return total;
        }
        return total + item.price * item.quantity;
    }, 0);
};

// Generate a unique ID (useful for items that don't have an ID yet, e.g., newly added to cart)
export const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// Check if product is on sale
export const isOnSale = (product) => {
    if (!product || typeof product.salePrice !== 'number' || typeof product.regularPrice !== 'number') {
        console.error("Invalid product:", product);
        return false;
    }
    return product.salePrice && product.salePrice < product.regularPrice;
};

// Calculate the discounted price
export const calculateDiscountedPrice = (product) => {
    if (isOnSale(product)) {
        return product.salePrice;
    }
    return product.regularPrice;
};

// Convert Congo sizes to a display label (e.g., S => Small)
export const sizeToLabel = (size) => {
    const sizeMap = {
        'S': 'Small',
        'M': 'Medium',
        'L': 'Large',
        'XL': 'Extra Large'
    };
    return sizeMap[size] || size;
};

