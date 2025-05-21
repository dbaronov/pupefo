import React from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '../types/product';
import LoadingSkeleton from './LoadingSkeleton';

interface ProductDetailProps {
  product: Product | null;
  isLoading?: boolean;
  error?: string | null;
}

const ProductDetail = ({ product, isLoading = false, error = null }: ProductDetailProps) => {
  const router = useRouter();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="product-detail-container">
        <button 
          onClick={() => router.back()}
          className="back-button"
          style={{
            marginBottom: '16px',
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Back to list
        </button>
        <LoadingSkeleton />
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="product-detail-container">
        <button onClick={() => router.push('/products')} className="back-button">← Back to list</button>
        <div className="error-message">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Handle product not found
  if (!product) {
    return (
      <div className="product-detail-container">
        <button onClick={() => router.push('/products')} className="back-button">← Back to list</button>
        <div className="not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Display product details
  return (
    <div className="product-detail-container">
      <button 
        onClick={() => router.push('/products')}
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to list
      </button>
      
      <div className="product-detail" style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <div className="product-image" style={{ flex: '0 0 40%' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ 
              width: '100%', 
              maxHeight: '400px', 
              objectFit: 'contain',
              borderRadius: '8px',
              padding: '1rem'
            }} 
          />
        </div>
        
        <div className="product-info" style={{ flex: '1 1 60%' }}>
          <h1 style={{ marginTop: 0 }}>{product.title}</h1>
          <p className="category" style={{ color: '#666', textTransform: 'capitalize' }}>
            {product.category}
          </p>
          <div className="price" style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem 0' }}>
            ${product.price.toFixed(2)}
          </div>
          <div className="rating" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ marginRight: '0.5rem' }}>
              ★ {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <div className="description" style={{ lineHeight: '1.6' }}>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;