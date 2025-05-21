import React, { memo, useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 300); // Debounce for 300ms
    
    return () => clearTimeout(timer);
  }, [value, onSearch]);
  
  return (
      
    <div className="search-container">
    <form role="search" aria-label="Product Search">
      <label htmlFor="search" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Search Products
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search products..."
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ margin: '1rem 0', padding: '8px 12px', width: 300 }}
        aria-label="Search products"
      />
      <button type='button' onClick={() => setValue('')} style={{ marginLeft: '0.5rem', padding: '8px 12px' }}>
        Clear
      </button>
    </form>
    </div>
  );
};

export default memo(SearchBar);
