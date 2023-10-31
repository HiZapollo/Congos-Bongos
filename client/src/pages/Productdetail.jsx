// ProductDetail.jsx
import { useState, useEffect } from 'react';

function ProductDetail({ match }) {
    // Local state to store the product details
    const [product, setProduct] = useState({});

    useEffect(() => {
        // Fetch product details based on the product ID from the route parameters
        fetch(`/api/products/${match.params.productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching product details:", error));
    }, [match.params.productId]);

    return (
        <div className="product-detail-container">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
