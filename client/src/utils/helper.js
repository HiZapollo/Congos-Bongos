// // Formats price to a standard currency display (e.g., $100.00)
// export const formatPrice = (price) => {
//     return `$${parseFloat(price).toFixed(2)}`;
// };

// // Truncate long product descriptions for display in product listings
// export const truncateDescription = (description, maxLength = 100) => {
//     if (description.length <= maxLength) return description;
//     return `${description.substring(0, maxLength)}...`;
// };

// // Calculate total price for items in cart
// export const calculateTotal = (cartItems) => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// };

// // Generate a unique ID (useful for items that don't have an ID yet, e.g., newly added to cart)
// export const generateUniqueId = () => {
//     return '_' + Math.random().toString(36).substr(2, 9);
// };

// // Check if product is on sale
// export const isOnSale = (product) => {
//     return product.salePrice && product.salePrice < product.regularPrice;
// };

// // Calculate the discounted price
// export const calculateDiscountedPrice = (product) => {
//     if (isOnSale(product)) {
//         return product.salePrice;
//     }
//     return product.regularPrice;
// };

// // Convert Congo sizes to a display label (e.g., S => Small)
// export const sizeToLabel = (size) => {
//     const sizeMap = {
//         'S': 'Small',
//         'M': 'Medium',
//         'L': 'Large',
//         'XL': 'Extra Large'
//     };
//     return sizeMap[size] || size;
// };