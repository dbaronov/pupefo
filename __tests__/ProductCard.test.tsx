import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard';

describe('ProductCard', () => {

  const mockProduct = {
	id: 1,
	title: 'White Gold Plated Princess',
	price: 99.99,
	description: 'This is a test product',
	category: 'electronics',
	image: 'test-image.jpg',
	rating: { rate: 4.5, count: 100 }
  };
	
  it('renders the product title', () => {
	render(<ProductCard product={mockProduct} />);
	const titleElement = screen.getByText(/White Gold Plated Princess/i);
	expect(titleElement).toBeInTheDocument();
  });
});
