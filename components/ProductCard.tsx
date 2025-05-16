import React, { memo } from 'react';
import Link from 'next/link';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="product-card" style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
    <Link href={`/products/${product.id}`}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy" 
          width={200}
          height={150}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3>{product.title.length > 40 ? `${product.title.substring(0, 40)}...` : product.title}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
    </Link>
  </div>
);

export default memo(ProductCard);