// src/components/ProductCard.tsx

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.onSale && <span className="badge sale-badge">Sale</span>}
        {product.isNew && <span className="badge new-badge">New</span>}
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <button className="quick-view-btn">Quick View</button>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <span>{'★'.repeat(Math.round(product.rating))}</span>
          <span>{'☆'.repeat(5 - Math.round(product.rating))}</span>
          <span className="review-count">({product.reviewCount})</span>
        </div>

        <div className="product-price">
          {product.onSale && product.salePrice ? (
            <>
              <span className="sale-price">${product.salePrice.toFixed(2)}</span>
              <span className="original-price">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="regular-price">${product.price.toFixed(2)}</span>
          )}
        </div>
        
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;