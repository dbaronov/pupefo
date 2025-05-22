import React, { Suspense, memo } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
}

// Common styles extracted to avoid repetition
const containerStyle = (productCount: number) => ({
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '1rem',
  justifyContent: productCount < 3 ? "flex-start" : "space-between"
});

const ProductList = ({ products }: ProductListProps) => {
  // Common container element that maintains consistent styling
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div style={containerStyle(products.length)}>{children}</div>
  );

  // Empty state
  if (!products.length) {
    return (
      <div className="empty-state">
        <h3>No products found</h3>
        <p>Chech your network connection or try adjusting your search or filters</p>
      </div>
    );
  }

  // Products list
  return (
    <Container>
      {products.map((product) => (
        <Suspense key={product.id} fallback={<LoadingSkeleton />}>
          <ProductCard key={product.id} product={product} />
        </Suspense>
      ))}
    </Container>
  );
};

export default memo(ProductList);
