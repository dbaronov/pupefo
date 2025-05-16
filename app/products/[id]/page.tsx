'use client';

import React, { useState, useEffect } from 'react';
import ProductDetail from '../../../components/ProductDetail';
import LoadingSkeleton from '../../../components/LoadingSkeleton';
import { useParams } from 'next/navigation';
import { useProductContext } from '../../../context/ProductContext';
import type { Product } from '../../../types/product';

const ProductDetailPage = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { products, loading, error: contextError } = useProductContext();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      return;
    }

    setIsLoading(false);
    
    if (id && products.length > 0) {
      // Convert string ID to number for comparison
      const productId = Number(id);
      const foundProduct = products.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setError(null);
      } else {
        setError(`Product with ID ${id} not found`);
        console.error(`Product not found: ${id}`);
      }
    }
  }, [id, products, loading]);

  if (contextError) {
    return <ProductDetail product={null} isLoading={false} error={contextError} />;
  }

  return (
    <ProductDetail product={product} isLoading={isLoading} error={error} />
  );
};

export default ProductDetailPage;
