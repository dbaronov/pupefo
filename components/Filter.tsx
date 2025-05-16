import React, { memo } from 'react';
import { Product } from '../types/product';

interface FilterProps {
  products: Product[];
  onFilter: (category: string) => void;
}

const Filter = ({ products, onFilter }: FilterProps) => {
  const categories = Array.from(new Set(products.map(p => p.category)));
  return (
    <select onChange={e => onFilter(e.target.value)} style={{ marginBottom: 16 }}>
      <option value="all">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default memo(Filter);
