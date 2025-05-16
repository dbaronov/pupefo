"use client";

import React from 'react';
import ProductList from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';
import { redirect } from 'next/navigation';

export const HomePage = () => {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading products: {error}</div>;
    }

    return (
        <main>
            <h1>Our Products</h1>
            <ProductList products={products} />
        </main>
    );
};

export default function Home() {
  redirect('/products');
}
