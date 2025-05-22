import { Product } from '../types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://fakestoreapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: Product[] = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
};
