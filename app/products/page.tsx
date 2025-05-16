'use client';

import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList';
import SearchBar from '../../components/SearchBar';
import Filter from '../../components/Filter';
import { useProductContext } from '../../context/ProductContext';

const PRODUCTS_PER_PAGE = 9;

const ProductsPage = () => {
  const { products, loading, error } = useProductContext();
  const [filtered, setFiltered] = useState(products);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    let result = products;
    if (query) {
      result = result.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    }
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    setFiltered(result);
    setPage(1);
  }, [products, query, category]);

  // Pagination logic
  const startIdx = (page - 1) * PRODUCTS_PER_PAGE;
  const endIdx = startIdx + PRODUCTS_PER_PAGE;
  const paginated = filtered.slice(startIdx, endIdx);
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <Filter products={products} onFilter={setCategory} />

      <div style={{ marginTop: 20 }}>
        <p>Showing {startIdx + 1} to {Math.min(endIdx, filtered.length)} of {filtered.length} products</p>
      </div>

      <ProductList products={paginated} />
      
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{
            marginBottom: '16px',
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{
            marginBottom: '16px',
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
