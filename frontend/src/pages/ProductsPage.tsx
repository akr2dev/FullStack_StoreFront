import React, { useState, useEffect } from 'react';
import './ProductPage.css';

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://storebackendapi-prod.eba-pdy3h2zr.us-east-1.elasticbeanstalk.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className="container">
                <h1>All Products</h1>
                <ul className="product-list">
                    {products.map(product => (
                        <li className="product-item" key={product.id}>
                            {product.name} - {product.price}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default ProductsPage;