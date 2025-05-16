import React, { Suspense, memo } from 'react';
import { LoadingSkeleton } from './LoadingSkeleton';
import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

// Common styles extracted to avoid repetition
const containerStyle = (productCount: number) => ({
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '1rem',
  justifyContent: productCount < 3 ? "flex-start" : "space-between"
});

const ProductList = ({ products, isLoading = false }: ProductListProps) => {
  // Common container element that maintains consistent styling
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div style={containerStyle(products.length)}>{children}</div>
  );

  // Empty state
  if (!products.length && !isLoading) {
    return (
      <div className="empty-state">
        <h3>No products found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <Suspense fallback={<LoadingSkeleton />}>
        <Container>
        {Array.from({ length: products.length }).map((_, i) => (
          <LoadingSkeleton key={i} />
        ))}
        </Container>
      </Suspense>
    );
  }

  // Products list
  return (
      <Container>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
  );
};

export default memo(ProductList);
